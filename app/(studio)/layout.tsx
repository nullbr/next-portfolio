import "../global.css";
import { Analytics } from "../components/Analytics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "nullbr",
    template: "%s | nullbr",
  },
  description: "Bruno Leite - Full Stack Developer",
  metadataBase: new URL("https://bruno.buzz"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "pt-BR": "/pt",
    },
  },
  openGraph: {
    title: "nullbr",
    description: "Bruno Leite - Full Stack Developer",
    url: "https://bruno.buzz",
    siteName: "bruno.buzz",
    images: [
      {
        url: "https://bruno.buzz/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "nullbr",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
