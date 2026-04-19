import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A&T Nexus - Empowering SMEs with Future-Ready Technology",
  description:
    "A&T Nexus website clone implemented in Next.js with dynamic sections and responsive interactions.",
  icons: {
    icon: [
      { url: "/theme/logo-no-text.png", type: "image/png" },
    ],
    shortcut: "/theme/logo-no-text.png",
    apple: "/theme/logo-no-text.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="atnexus-body">{children}</body>
    </html>
  );
}
