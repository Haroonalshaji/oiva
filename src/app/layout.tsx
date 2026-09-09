import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Playfair_Display } from "next/font/google";
import { Box } from "@chakra-ui/react";
import { Providers } from "@/components/providers/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";
import { defaultDescription, seoKeywords, ogImage, indexFollow, canonicalUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.brand,
  title: {
    default: `${siteConfig.brand} — Online Ladies Store for Quiet-Luxury Womenswear`,
    template: `%s · ${siteConfig.brand}`,
  },
  description: defaultDescription,
  keywords: [...seoKeywords],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.publisher,
  category: "fashion",
  robots: indexFollow,
  alternates: { canonical: canonicalUrl("/") },
  verification: {
    google: "rMhbaoDKoyThEYAwQGBWuN1FYggXI7fVzxFlmplD4pc",
  },
  openGraph: {
    title: `${siteConfig.brand} — Online Ladies Store for Quiet-Luxury Womenswear`,
    description: defaultDescription,
    url: canonicalUrl("/"),
    siteName: siteConfig.brand,
    images: [ogImage],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} — Online Ladies Store for Quiet-Luxury Womenswear`,
    description: defaultDescription,
    images: [ogImage.url],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const comingSoon = siteConfig.comingSoon;

  return (
    <html lang="en-IN" className={`${playfair.variable} ${cormorant.variable} ${jost.variable}`}>
      <body>
        <JsonLd />
        <Providers>
          <Box minH="100vh" display="flex" flexDirection="column" bg="oiva.ivory">
            {!comingSoon && <Header />}
            <Box as="main" flex={1}>
              {children}
            </Box>
            {!comingSoon && <Footer />}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
