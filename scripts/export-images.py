#!/usr/bin/env python3
"""Export web-ready images for thakalikitchen.

Sources are repo-relative paths — restaurant photos live in food_images/
(WhatsApp exports, filenames kept as-is), older full-res shots in
source_images/. Both folders are gitignored: the repo is public and web
visitors only need the optimized exports in images/.

- Bakes EXIF rotation into pixels (exif_transpose), then saves WITHOUT any
  EXIF -> strips GPS + device metadata.
- Optional pre-crop to a target aspect ratio with a focus hint, so the file
  matches its CSS slot instead of shipping bytes the browser crops away.
- Resizes to max width, saves progressive JPEG.

Careful: the WhatsApp filenames contain U+202F (narrow no-break space)
before "AM"/"PM" — it looks like a normal space but isn't. Don't retype
src paths by hand; copy them from `ls food_images/` output or glob them.

Usage: python3 scripts/export-images.py [mapping.json]
       (defaults to scripts/photo-mapping.json)
mapping.json: [{"src": "food_images/IMG 1.jpeg", "out": "hero-thali.jpg",
                "max_w": 1600, "aspect": "4:5", "focus": "center"}, ...]
"""
import json
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "images"


def _fraction(focus):
    """Focus as crop offset fraction: 0 = top/left, 0.5 = center, 1 = bottom/right.
    Accepts the keywords or a number."""
    named = {"top": 0.0, "left": 0.0, "center": 0.5, "bottom": 1.0, "right": 1.0}
    return named[focus] if isinstance(focus, str) else float(focus)


def crop_to_aspect(im, aspect, focus="center"):
    tw, th = (int(x) for x in aspect.split(":"))
    target = tw / th
    w, h = im.size
    cur = w / h
    f = _fraction(focus)
    if abs(cur - target) < 0.01:
        return im
    if cur > target:  # too wide -> cut left/right
        new_w = round(h * target)
        x = round((w - new_w) * f)
        box = (x, 0, x + new_w, h)
    else:  # too tall -> cut top/bottom
        new_h = round(w / target)
        y = round((h - new_h) * f)
        box = (0, y, w, y + new_h)
    return im.crop(box)


def export(entry):
    im = Image.open(ROOT / entry["src"])
    im = ImageOps.exif_transpose(im)  # bake rotation/mirror into pixels
    im = im.convert("RGB")
    if entry.get("aspect"):
        im = crop_to_aspect(im, entry["aspect"], entry.get("focus", "center"))
    max_w = entry.get("max_w", 1600)
    if im.width > max_w:
        im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
    out = OUT / entry["out"]
    im.save(out, "JPEG", quality=entry.get("quality", 82), optimize=True, progressive=True)
    kb = out.stat().st_size / 1024
    print(f"{Path(entry['src']).name:>14} -> {entry['out']:<32} {im.width}x{im.height}  {kb:6.0f} KB")


def main():
    mapping_path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).parent / "photo-mapping.json"
    mapping = json.loads(mapping_path.read_text())
    OUT.mkdir(exist_ok=True)
    missing = [e["src"] for e in mapping if not (ROOT / e["src"]).exists()]
    for entry in mapping:
        if entry["src"] in missing:
            print(f"WARNING: source not found, skipping: {entry['src']}")
            continue
        export(entry)
    print(f"\n{len(mapping) - len(missing)} images exported to {OUT}")
    if missing:
        print(f"{len(missing)} source(s) missing — exports for them were left untouched.")
        raise SystemExit(1)


if __name__ == "__main__":
    main()
