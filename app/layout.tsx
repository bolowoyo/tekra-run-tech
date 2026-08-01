import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Tekra Run Technologies | Engineering What’s Next";
const description =
  "Tekra Run Technologies delivers data, cloud, software, security, operations, and OEM licensing expertise for organizations ready to move.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = host
    ? `${protocol}://${host}`
    : "https://tekra-run-technologies.bolowoyo.chatgpt.site";
  const socialImage = `${origin}/og.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: socialImage, width: 1734, height: 908 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

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
