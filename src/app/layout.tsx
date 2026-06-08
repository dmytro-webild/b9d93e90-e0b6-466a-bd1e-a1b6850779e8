import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'Purohit Misthan Bhandar Goluwala | Sweets, Restaurant & Hotel',
  description: 'Experience the finest Indian sweets, authentic dining, and comfortable hotel stays at Purohit Misthan Bhandar in Goluwala. A legacy of taste and hospitality.',
  keywords: ["Purohit Misthan Bhandar, Goluwala, sweet shop, Indian sweets, restaurant, hotel, best hotel Goluwala, authentic Indian food, catering, event venue"],
  openGraph: {
    "title": "Purohit Misthan Bhandar Goluwala | Sweets, Restaurant & Hotel",
    "description": "Experience the finest Indian sweets, authentic dining, and comfortable hotel stays at Purohit Misthan Bhandar in Goluwala. A legacy of taste and hospitality.",
    "url": "https://www.purohitgoluwala.com",
    "siteName": "Purohit Misthan Bhandar",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/diwali-feast-traditional-indian-sweets-festive-decorations_23-2152002855.jpg",
        "alt": "Assortment of traditional Indian sweets"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Purohit Misthan Bhandar Goluwala | Sweets, Restaurant & Hotel",
    "description": "Experience the finest Indian sweets, authentic dining, and comfortable hotel stays at Purohit Misthan Bhandar in Goluwala. A legacy of taste and hospitality.",
    "images": [
      "http://img.b2bpic.net/free-photo/diwali-feast-traditional-indian-sweets-festive-decorations_23-2152002855.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
