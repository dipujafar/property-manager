import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { envConfig } from "@/config";
import Navbar from "@/components/shared/Navbar/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Property Manager",
    default: "Property Manager - Manage Properties Easily",
  },
  description:
    "The official paltform for property management. here you can find all the properties and manage them easily.",

  keywords: [
    "property manager",
    "property management",
    "property management software",
    "property management system",
    "property management tools",
  ],
  metadataBase: new URL(envConfig.clientBaseApi as string),
  openGraph: {
    title: "Property Manager - Manage Properties Easily",
    description:
      "The official paltform for property management. here you can find all the properties and manage them easily.",
    url: envConfig.clientBaseApi as string,
    siteName: "Property Manager",
    images: [`${envConfig.clientBaseApi}/og-image.png`],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
