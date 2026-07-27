import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tekra Run Technologies | Engineering What’s Next",
  description:
    "Tekra Run Technologies delivers data, cloud, software, security, operations, and OEM licensing expertise for organizations ready to move.",
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
