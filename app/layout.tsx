import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aneesh Anirudhan",
  description: "Developer Portfolio of Aneesh Anirudhan to showcase his work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" fetchPriority="high" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <main>
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
