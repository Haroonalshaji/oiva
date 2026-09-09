import { siteConfig } from "@/data/site";
import { canonicalUrl } from "@/lib/seo";
import { productImage, postImage } from "@/lib/images";
import type { JournalPost, Product } from "@/types";

const logoUrl = `${siteConfig.url}/logo/oivah-lockup-og.png`;

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
const storeId = `${siteConfig.url}/#store`;

const organization = {
  "@type": "Organization",
  "@id": organizationId,
  name: siteConfig.brand,
  legalName: "OIVAH Feminine Atelier",
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: logoUrl,
  },
  image: logoUrl,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: [siteConfig.social.instagram, siteConfig.social.pinterest],
};

const clothingStore = {
  "@type": "ClothingStore",
  "@id": storeId,
  name: "OIVAH Feminine Atelier",
  alternateName: siteConfig.brand,
  url: siteConfig.url,
  image: logoUrl,
  description:
    "Online ladies store for quiet-luxury womenswear — cotton kurtas, tunics, shirts and maxi dresses in India.",
  email: siteConfig.email,
  telephone: siteConfig.phone,
  parentOrganization: { "@id": organizationId },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cherpulassery, Cherpulassery Post",
    addressLocality: "Palakkad",
    addressRegion: "Kerala",
    postalCode: "679503",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.812,
    longitude: 76.271,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: siteConfig.url,
  name: siteConfig.brand,
  publisher: { "@id": organizationId },
  inLanguage: "en-IN",
};

const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [organization, clothingStore, website],
};

function JsonLdScript({ json }: { json: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function JsonLd() {
  return <JsonLdScript json={siteGraph} />;
}

export function ProductJsonLd({ product }: { product: Product }) {
  const url = canonicalUrl(`/products/${product.slug}`);
  const image = `${siteConfig.url}${productImage(product.slug, 0)}`;

  return (
    <JsonLdScript
      json={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image,
        sku: product.slug,
        brand: {
          "@type": "Brand",
          name: siteConfig.brand,
        },
        category: product.category,
        material: product.material,
        url,
        offers: {
          "@type": "Offer",
          url,
          priceCurrency: "INR",
          price: product.price,
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: { "@id": organizationId },
        },
      }}
    />
  );
}

export function ArticleJsonLd({ post }: { post: JournalPost }) {
  const url = canonicalUrl(`/journal/${post.slug}`);

  return (
    <JsonLdScript
      json={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: `${siteConfig.url}${postImage(post.slug)}`,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: post.author,
        },
        publisher: { "@id": organizationId },
        mainEntityOfPage: url,
        url,
        inLanguage: "en-IN",
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLdScript
      json={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: canonicalUrl(item.path),
        })),
      }}
    />
  );
}
