import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Playfair_Display } from "next/font/google";
import { Box } from "@chakra-ui/react";
import { Providers } from "@/components/providers/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";
import { defaultDescription } from "@/lib/seo";

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
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: defaultDescription,
  openGraph: {
    title: siteConfig.name,
    description: defaultDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/logo/oiva-logo-square.png", width: 600, height: 600 }],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const comingSoon = siteConfig.comingSoon;

  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${jost.variable}`}>
      <body>
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
