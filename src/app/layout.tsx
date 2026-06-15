import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";

import { AppProviders } from "@/providers/app-providers";
import { adminSiteMetadata } from "@/lib/metadata/site-metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});
import "@/styles/globals.css";
import "@/styles/themes/admin.css";
import "@/styles/tokens/colors.css";

export const metadata: Metadata = adminSiteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} min-h-screen font-sans antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
