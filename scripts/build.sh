#!/bin/sh
# Assemble the deployable site into dist/.
#
# Cloudflare's asset upload publishes an entire directory and offers no working
# exclude mechanism — .assetsignore is silently ignored as of wrangler 4.114 —
# so pointing it at the repo root would publish .git and the photo originals in
# food_images/ and source_images/. Listing what ships is the only safe option.
#
# worker/ deliberately stays out of dist/. Wrangler bundles it separately via
# "main" in wrangler.jsonc; copying it here would also serve the source as a
# downloadable static file.
set -eu

cd "$(dirname "$0")/.."

rm -rf dist
mkdir -p dist
cp index.html impressum.html datenschutz.html dist/
cp robots.txt sitemap.xml dist/
cp -R css js images dist/

echo "dist/: $(find dist -type f | wc -l | tr -d ' ') files"
