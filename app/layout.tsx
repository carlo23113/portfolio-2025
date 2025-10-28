import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Jan Carlo Espiritu | Senior Frontend Developer | Vue.js & Nuxt.js Expert",
  description:
    "Experienced Senior Frontend Developer specializing in Vue.js, Nuxt.js, React, Next.js, and TypeScript. Building beautiful, responsive web applications with modern technologies. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Jan Carlo Espiritu",
    "Frontend Developer",
    "Senior Frontend Developer",
    "Vue.js Developer",
    "Nuxt.js Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Full Stack Developer",
    "Web Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Frontend Engineer",
    "Software Engineer",
    "Web Application Developer",
    "SaaS Developer",
    "Portfolio"
  ],
  authors: [{ name: "Jan Carlo Espiritu" }],
  creator: "Jan Carlo Espiritu",
  publisher: "Jan Carlo Espiritu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL("https://www.jancarloespiritu.com/"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Jan Carlo Espiritu | Senior Frontend Developer",
    description:
      "Experienced Senior Frontend Developer specializing in Vue.js, Nuxt.js, React, Next.js, and TypeScript. Building beautiful, responsive web applications.",
    url: "https://www.jancarloespiritu.com/",
    siteName: "Jan Carlo Espiritu Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jan Carlo Espiritu - Senior Frontend Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Carlo Espiritu | Senior Frontend Developer",
    description:
      "Experienced Senior Frontend Developer specializing in Vue.js, Nuxt.js, React, Next.js, and TypeScript.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>💻</text></svg>",
        type: "image/svg+xml"
      }
    ]
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jan Carlo Espiritu",
    jobTitle: "Senior Frontend Developer",
    description:
      "Experienced Senior Frontend Developer specializing in Vue.js, Nuxt.js, React, Next.js, and TypeScript.",
    url: "https://www.jancarloespiritu.com/",
    sameAs: [
      "https://github.com/carlo23113",
      "https://www.linkedin.com/in/jan-carlo-espiritu-792994187/"
    ],
    knowsAbout: [
      "Vue.js",
      "Nuxt.js",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Frontend Development",
      "Full Stack Development",
      "Web Development"
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Your University"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Philippines"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased">
        <noscript>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Jan Carlo Espiritu - Senior Frontend Developer</h1>
            <p>Experienced Senior Frontend Developer specializing in Vue.js, Nuxt.js, React, Next.js, and TypeScript.</p>
            <p>Please enable JavaScript to view the full interactive portfolio.</p>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
