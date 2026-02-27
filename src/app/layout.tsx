import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer",
  description:
    "Full Stack Developer specializing in building responsive, accessible web applications with React, Next.js, and Node.js. Open to work opportunities.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Portfolio"
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Full Stack Developer",
    description:
      "Full Stack Developer specializing in building responsive, accessible web applications.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Full Stack Developer",
    description:
      "Full Stack Developer specializing in building responsive, accessible web applications."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
