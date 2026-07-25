import type { Metadata } from "next";

export const SITE_URL = "https://supremetrading.in";
export const SITE_NAME = "Supreme Trading Corp";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
};

export function createPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  imageWidth = 1200,
  imageHeight = 630,
}: PageMetadata): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [{ url: image, width: imageWidth, height: imageHeight, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/supreme/supreme_logo@3x.png`,
  email: "info@supremetrading.in",
  telephone: "+91-22-2345-5226",
  foundingDate: "2002",
  address: {
    "@type": "PostalAddress",
    streetAddress: "51/A, Essaji Street, Vadgadi, Masjid Bunder (W)",
    addressLocality: "Mumbai",
    postalCode: "400003",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export function collectionPageJsonLd({
  name,
  description,
  path,
  items = [],
}: {
  name: string;
  description: string;
  path: string;
  items?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    ...(items.length
      ? {
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: items.length,
            itemListElement: items.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item,
            })),
          },
        }
      : {}),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const entries = Array.isArray(data) ? data : [data];

  return entries.map((entry, index) => (
    <script
      // The replacement prevents a literal closing tag from being injected.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(entry).replace(/</g, "\\u003c") }}
      key={index}
      type="application/ld+json"
    />
  ));
}
