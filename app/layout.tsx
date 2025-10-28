import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jan Carlo Espiritu | Senior Frontend Developer",
  description:
    "Frontend Web Developer specializing in React, Next.js, and modern web technologies. Also experienced in Backend and Full Stack development.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>💻</text></svg>",
        type: "image/svg+xml"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
