import type { Metadata } from "next";
import "./globals.css"; // This line is crucial

export const metadata: Metadata = {
  title: "EduSeek for Jenny",
  description: "An assignment tool simulation.",
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