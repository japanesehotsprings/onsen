/**
 * サイト全体の設定
 * 本番ドメインが決まったら SITE_URL をここだけ書き換える（canonical・OGP・sitemap が追従する）
 */
export const SITE_URL = 'https://japan-onsen-web.pages.dev';
export const SITE_NAME = '日本温泉';
export const DEFAULT_OG_IMAGE = '/ogp.png';

// 宿向けホームページ制作サービス「YADO WEB」（運営：日本温泉）
// 内容・料金は yado-web.pages.dev（MyBusiness/businesses/yado-hp/）と必ずそろえる
export const YADO_WEB_FORM = 'https://forms.gle/h5PweVPeUYJi7w6C6';
export function yado_web_url(campaign) {
  return `https://yado-web.pages.dev/?utm_source=japan-onsen&utm_medium=referral&utm_campaign=${encodeURIComponent(campaign)}`;
}

// Googleアナリティクス（GA4）の測定ID。空のあいだは計測タグを入れない
export const GA_ID = 'G-K111343186';
