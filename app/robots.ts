import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.jancarloespiritu.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/_next/data/", "/private/"]
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
