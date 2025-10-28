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
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Jan Carlo Espiritu - Senior Frontend Developer",
        type: "image/svg+xml"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Carlo Espiritu | Senior Frontend Developer",
    description:
      "Experienced Senior Frontend Developer specializing in Vue.js, Nuxt.js, React, Next.js, and TypeScript.",
    images: ["/og-image.svg"]
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
          <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', lineHeight: '1.6' }}>
            <h1 style={{ fontSize: '2em', marginBottom: '20px', color: '#000' }}>Jan Carlo Espiritu - Senior Frontend Developer</h1>

            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>About Me</h2>
              <p style={{ marginBottom: '15px', color: '#555' }}>
                Experienced Senior Frontend Developer specializing in Vue.js, Nuxt.js, React, Next.js, and TypeScript.
                Building beautiful, responsive web applications with modern technologies.
              </p>
            </section>

            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>Skills</h2>
              <ul style={{ color: '#555' }}>
                <li>Vue.js & Nuxt.js - Expert Level</li>
                <li>React & Next.js - Advanced</li>
                <li>TypeScript & JavaScript - Expert Level</li>
                <li>Tailwind CSS & Vuetify - Expert Level</li>
                <li>PHP & Laravel - Intermediate</li>
                <li>GraphQL & REST APIs - Advanced</li>
              </ul>
            </section>

            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>Featured Projects</h2>
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.2em', marginBottom: '5px', color: '#444' }}>Vehicle Rental Management SaaS</h3>
                <p style={{ color: '#555' }}>Multi-tenant platform with fleet tracking, customer management, and automated contract generation.</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.2em', marginBottom: '5px', color: '#444' }}>Winona - Telemedicine Platform</h3>
                <p style={{ color: '#555' }}>Healthcare platform for virtual consultations and prescription management.</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.2em', marginBottom: '5px', color: '#444' }}>Casa Del Mar Haven Resort</h3>
                <p style={{ color: '#555' }}>Luxury resort website with booking system and interactive galleries.</p>
              </div>
            </section>

            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>Contact</h2>
              <p style={{ color: '#555' }}>
                <strong>GitHub:</strong> <a href="https://github.com/carlo23113" style={{ color: '#0066cc' }}>github.com/carlo23113</a><br/>
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jan-carlo-espiritu-792994187/" style={{ color: '#0066cc' }}>Jan Carlo Espiritu</a>
              </p>
            </section>

            <p style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f5f5f5', borderLeft: '4px solid #333', color: '#555' }}>
              <strong>Note:</strong> Please enable JavaScript to view the full interactive portfolio with animations and advanced features.
            </p>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
