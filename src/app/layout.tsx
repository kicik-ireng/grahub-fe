import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRahub | Community Management System",
  description: "Modern community management platform for RT/RW.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
