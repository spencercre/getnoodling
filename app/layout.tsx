import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GetNoodling — Voice tools for people who think faster than they type",
  description: "Swift Scribe and Swift Type — a suite of simple, reliable voice tools. Stop typing. Start noodling.",
  openGraph: {
    title: "GetNoodling",
    description: "Voice tools for people who think faster than they type.",
    url: "https://getnoodling.com",
    siteName: "GetNoodling",
    images: [{ url: "/hero.png", width: 1440, height: 600 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
