#!/usr/bin/env python3
"""Export the dish photos used by the menu detail sheet.

Separate from export-images.py because the sheet needs one uniform 4:3 slot,
and the two kinds of source photo have to reach it differently:

- Restaurant shots (a plate on a table) are cropped to 4:3 — "cover".
- Studio shots are a roll or a row of maki floating in a wide black frame, so a
  plain 4:3 crop leaves the food as a speck in the middle. Those use "subject":
  find the bounding box of the lit pixels and build the 4:3 box around it so the
  food fills a set share of the frame. Padding with the backdrop colour covers
  the case where that box runs past an edge — invisible against flat black.

Mapping lives in scripts/dish-photo-mapping.json. Sources are the untouched
WhatsApp exports in food_images/, whose names contain U+202F before AM/PM —
never retype them, copy or glob them.

Usage: python3 scripts/export-dish-images.py
"""
import json
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "images"
MAPPING = Path(__file__).parent / "dish-photo-mapping.json"
ASPECT = 4 / 3
MAX_W = 900
QUALITY = 80


def _fraction(focus):
    named = {"top": 0.0, "left": 0.0, "center": 0.5, "bottom": 1.0, "right": 1.0}
    return named[focus] if isinstance(focus, str) else float(focus)


def cover(im, focus):
    w, h = im.size
    f = _fraction(focus)
    if w / h > ASPECT:
        new_w = round(h * ASPECT)
        x = round((w - new_w) * f)
        return im.crop((x, 0, x + new_w, h))
    new_h = round(w / ASPECT)
    y = round((h - new_h) * f)
    return im.crop((0, y, w, y + new_h))


def backdrop(im):
    corners = [im.getpixel(p) for p in ((0, 0), (im.width - 1, 0), (0, im.height - 1), (im.width - 1, im.height - 1))]
    return tuple(round(sum(c[i] for c in corners) / len(corners)) for i in range(3))


def subject(im, fill=0.62, threshold=34):
    """4:3 box around the lit subject, `fill` being its share of the frame."""
    box = im.convert("L").point(lambda v: 255 if v > threshold else 0).getbbox()
    if box is None:
        return cover(im, "center")
    left, top, right, bottom = box
    cx, cy = (left + right) / 2, (top + bottom) / 2
    # whichever of the subject's dimensions is the tighter fit decides the box
    height = max((bottom - top) / fill, (right - left) / fill / ASPECT)
    width = height * ASPECT
    crop = (round(cx - width / 2), round(cy - height / 2), round(cx + width / 2), round(cy + height / 2))
    if crop[0] >= 0 and crop[1] >= 0 and crop[2] <= im.width and crop[3] <= im.height:
        return im.crop(crop)
    canvas = Image.new("RGB", (round(width), round(height)), backdrop(im))
    canvas.paste(im, (-crop[0], -crop[1]))
    return canvas


def export(entry):
    src = ROOT / entry["src"]
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    if entry.get("fit") == "subject":
        im = subject(im, entry.get("fill", 0.62))
    else:
        im = cover(im, entry.get("focus", "center"))
    if im.width > MAX_W:
        im = im.resize((MAX_W, round(im.height * MAX_W / im.width)), Image.LANCZOS)
    out = OUT / (entry["out"] + ".jpg")
    im.save(out, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    return out.stat().st_size / 1024


def main():
    mapping = json.loads(MAPPING.read_text())
    OUT.mkdir(exist_ok=True)
    missing = [e for e in mapping if not (ROOT / e["src"]).exists()]
    for entry in mapping:
        if entry in missing:
            print(f"WARNING: source not found, skipping: {entry['src']}")
            continue
        kb = export(entry)
        print(f"{entry['out']:<38} {entry.get('fit', 'cover'):<7} {kb:6.0f} KB   <- {Path(entry['src']).name}")
    print(f"\n{len(mapping) - len(missing)} dish images exported to {OUT}")
    if missing:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
