#!/usr/bin/env bash
# Deploy Portofolio 3D ke GitHub Pages (kyuzalabs/portfolio-3d)
set -u
cd "$(dirname "$0")"

TOKEN=$(cat /home/agentuser/.hermes/.gh_token)
OWNER="kyuzalabs"
REPO="portfolio-3d"
AUTH="Authorization: Bearer $TOKEN"

echo "==> git init & commit (main)"
if [ ! -d .git ]; then
  git init -q
  git config user.name "kyuzalabs"
  git config user.email "hazeesatoru5@gmail.com"
fi
git checkout -q -b main 2>/dev/null || git checkout -q main
git add -A
git commit -q -m "Portofolio 3D interaktif — React+Three.js (R3F), dark futuristik" 2>/dev/null && echo "   committed" || echo "   nothing new"

echo "==> pastikan repo ada"
CODE=$(curl -s -o /dev/null -w '%{http_code}' -H "$AUTH" "https://api.github.com/repos/$OWNER/$REPO")
if [ "$CODE" = "404" ]; then
  RESP=$(curl -s -X POST "https://api.github.com/user/repos" -H "$AUTH" -H "Accept: application/vnd.github+json" \
    -d "{\"name\":\"$REPO\",\"description\":\"Website portofolio 3D interaktif — React+Three.js, dark futuristik\",\"public\":true}")
  echo "$RESP" | grep -q '"full_name"' && echo "   repo created" || echo "   ${RESP:0:180}"
else
  echo "   repo exists (HTTP $CODE)"
fi

echo "==> push main"
git remote remove origin 2>/dev/null || true
git remote add origin "https://kyuzalabs:${TOKEN}@github.com/$OWNER/$REPO.git"
git push -u origin main 2>&1 | tail -4

echo "==> build & deploy dist -> gh-pages"
npm run build >/dev/null 2>&1
rm -rf /tmp/portfolio-ghpages
mkdir -p /tmp/portfolio-ghpages
cp -r dist/. /tmp/portfolio-ghpages/
touch /tmp/portfolio-ghpages/.nojekyll
cd /tmp/portfolio-ghpages
git init -q
git config user.name "kyuzalabs"
git config user.email "hazeesatoru5@gmail.com"
git checkout -q -b gh-pages
git add -A
git commit -q -m "deploy $(date +%s)" >/dev/null
git remote add origin "https://kyuzalabs:${TOKEN}@github.com/$OWNER/$REPO.git"
git push -f -q origin gh-pages 2>&1 | tail -4
echo "   gh-pages pushed"

echo "==> enable Pages"
curl -s -X POST "https://api.github.com/repos/$OWNER/$REPO/pages" \
  -H "$AUTH" -H "Accept: application/vnd.github+json" \
  -d '{"source":{"branch":"gh-pages","path":"/"}}' >/dev/null 2>&1

echo "==> SELESAI — URL: https://$OWNER.github.io/$REPO/"