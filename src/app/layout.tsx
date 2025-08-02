import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JennySeek",
  description: "A personalized learning experience. Built by Andrew. Inspired by Jenny."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* The body tag will now use the default background and text colors from your new theme */}
      <body>{children}</body>
    </html>
  );
}