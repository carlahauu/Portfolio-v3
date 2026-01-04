import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carla Hau",
  description:
    "Software Developer. Experience with React.js, Next.js, FastAPI, Pytest, Cypress, and more. Previously interned at Amazon Web Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle,#73737330_1px,transparent_1px)] bg-[size:18px_18px]" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
