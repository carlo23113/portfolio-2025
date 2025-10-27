import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jan Carlo Espiritu | Senior Frontend Developer",
  description:
    "Frontend Web Developer specializing in React, Next.js, and modern web technologies. Also experienced in Backend and Full Stack development."
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
