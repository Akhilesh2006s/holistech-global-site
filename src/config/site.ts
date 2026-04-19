/** Production site origin (no trailing slash). Override with VITE_SITE_URL in .env.production. */
const FALLBACK_SITE_URL = "https://www.holistechglobalsolutions.com";

export const SITE_NAME = "Holistech Global Solutions";

export const SITE_DEFAULT_DESCRIPTION =
  "Operator-led GTM and channel expansion for global technology companies. Partner ecosystems, channel strategy, and revenue execution that make growth predictable.";

/** Open Graph / Twitter default when a page does not pass a custom image */
export const DEFAULT_OG_IMAGE_PATH = "/Banner1.png";

export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL as string | undefined;
  return (raw?.trim() || FALLBACK_SITE_URL).replace(/\/+$/, "");
}

export function absoluteUrl(assetPath: string): string {
  const base = getSiteUrl();
  const path = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${base}${path}`;
}

export function buildPageTitle(pageTitle: string): string {
  if (pageTitle.includes(SITE_NAME)) return pageTitle;
  return `${pageTitle} | ${SITE_NAME}`;
}
