import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const geistSans = localFont({
  // src: "./fonts/GeistVF.woff",
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  // src: "./fonts/GeistMonoVF.woff",
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LIRIUN-UX",
  description: "DIseno y creacion de sitios web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="../../public/favicon.png" sizes="any" type="image/png" />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} `}
      >
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
