import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SmartQR | Your Design, Any Destination",
  description: "Welcome to SmartQR! Instantly Generate Stylish, High-Quality QR Codes for Your links, Emails. ",
  keywords: ["SmartQR", "QR code", "generator", "free", "online", "custom", "download", "hight-resolution", "color-options"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-gray-900 h-full`}
      >
        {children}
      </body>
    </html>
  );
}
