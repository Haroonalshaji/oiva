import { siteConfig } from "@/data/site";

const storeSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "OIVAH Feminine Atelier",
  alternateName: "OIVAH",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo/oivah-lockup-og.png`,
  image: `${siteConfig.url}/logo/oivah-lockup-og.png`,
  description:
    "Online ladies store for quiet-luxury womenswear — cotton kurtas, tunics, shirts and maxi dresses in India.",
  email: siteConfig.email,
  telephone: siteConfig.phone,
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
  sameAs: [siteConfig.social.instagram, siteConfig.social.pinterest],
  priceRange: "₹₹",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
    />
  );
}
