import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

import { Header } from "@/components/header/header";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });

export const metadata: Metadata = {
  title: "BricksViewer.com",
  description:
    "We provide our clients with the best properties and property management services in India. We are a one-stop shop for all your property needs. We provide a wide range of services, including buying, selling, renting, and leasing.",
  keywords:
    "Real Estate, Properties, Buy, Rent, Sell, Book, Rent, Lease, Bricks, BricksViewer, BricksViewer.com, Bricks Viewer",
  icons: "/favicon.jpg",
  openGraph: {
    title: "BricksViewer.com",
    description:
      "We provide our clients with the best properties and property management services in India. We are a one-stop shop for all your property needs. We provide a wide range of services, including buying, selling, renting, and leasing.",
    images: [
      {
        url: "/favicon.jpg",
        width: 800,
        height: 600,
        alt: "BricksViewer.com",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background montserrat antialiased",
          montserrat.variable
        )}
      >
        <div className="flex flex-col justify-between w-full h-full min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
