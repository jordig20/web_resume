import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});



const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ui"
});

export const metadata = {
  title: "Jordi | IT Support & Developer",
  description:
    "IT Support Specialist & Developer building real-world solutions. From automation and infrastructure to web apps — focused on efficiency, reliability, and clean execution.",
  openGraph: {
    title: "Jordi | IT Support & Developer",
    description:
      "Building real-world solutions across IT, automation, and development.",
    url: "https://jordi.is-a.dev",
    siteName: "Jordi Portfolio",
    images: [
      {
        url: "https://jordi.is-a.dev/jordi-portrait.webp",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
