import type { Metadata } from "next";
import "./globals.css";

const title = "Tekra Run Technologies | Engineering What’s Next";
const description =
  "Tekra Run Technologies delivers data, cloud, software, security, operations, and OEM licensing expertise for organizations ready to move.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tekrarun.com"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1734, height: 908 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
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
