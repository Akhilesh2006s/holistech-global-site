import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  SITE_NAME,
  SITE_DEFAULT_DESCRIPTION,
  getSiteUrl,
  absoluteUrl,
  buildPageTitle,
  DEFAULT_OG_IMAGE_PATH,
} from "@/config/site";

export type PageSeoProps = {
  title: string;
  description?: string;
  /** Absolute URL or site-root path (e.g. /insights.png) */
  image?: string;
  /** Override canonical path (rare); defaults to current location */
  canonicalPath?: string;
  noindex?: boolean;
};

export function PageSeo({
  title,
  description = SITE_DEFAULT_DESCRIPTION,
  image,
  canonicalPath,
  noindex,
}: PageSeoProps) {
  const { pathname } = useLocation();
  const path = canonicalPath ?? pathname;
  const base = getSiteUrl();
  const canonical =
    path === "/" || path === "" ? `${base}/` : `${base}${path.startsWith("/") ? path : `/${path}`}`;

  const docTitle = buildPageTitle(title);
  const ogImage =
    image == null
      ? absoluteUrl(DEFAULT_OG_IMAGE_PATH)
      : image.startsWith("http")
        ? image
        : absoluteUrl(image);

  return (
    <Helmet prioritizeSeoTags>
      <title>{docTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={docTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@HolistechGlobal" />
      <meta name="twitter:title" content={docTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

const organizationSchema = () => {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: SITE_NAME,
        url: base,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/Logo.png"),
        },
        description: SITE_DEFAULT_DESCRIPTION,
        email: "mohsin.mohammed@holistechglobal.com",
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        name: SITE_NAME,
        url: base,
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };
};

/** Sitewide JSON-LD; render once inside HelmetProvider. */
export function SiteJsonLd() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema())}</script>
    </Helmet>
  );
}
