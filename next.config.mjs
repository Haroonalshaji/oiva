/** Placeholder catalog slugs from before the live OIVAH collection. Still in Google's old sitemap. */
const retiredProductSlugs = [
  "silk-drape-blouse",
  "wool-tailored-coat",
  "linen-column-dress",
  "cashmere-knit-polo",
  "cotton-wide-trouser",
  "satin-bias-skirt",
  "merino-turtleneck",
  "leather-sling-back",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "oivah.com" }],
        destination: "https://www.oivah.com/:path*",
        permanent: true,
      },
      ...retiredProductSlugs.map((slug) => ({
        source: `/products/${slug}`,
        destination: "/products",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
