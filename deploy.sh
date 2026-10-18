#!/bin/bash
# 日本温泉 を Cloudflare Pages（japan-onsen-web）へ公開する
# 使い方: bash deploy.sh   （ビルド→全ページの静的HTML書き出し→画像WebP化→アップロード）
set -e
cd "$(dirname "$0")"
npm run build
MSG="日本温泉 更新 $(date '+%Y-%m-%d %H:%M')"
CLOUDFLARE_ACCOUNT_ID=3cf8c2150242650f7b1c850edd355f53 npx -y wrangler@latest pages deploy dist --project-name japan-onsen-web --branch main --commit-message "$MSG" --commit-dirty=true
