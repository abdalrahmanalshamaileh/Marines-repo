import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marines - Underwater ROV Inspection Services | Jordan",
  description:
    "Pioneering AI-powered underwater inspection services in Jordan using ROV technology. DNV & Lloyd's Register certified. Hull inspection, marine surveys, and biofouling detection.",
  keywords:
    "underwater inspection, ROV services, marine inspection Jordan, AI biofouling detection, hull inspection, underwater operations, Aqaba marine services",
  generator: "Raed Shafeek",
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
      >
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
