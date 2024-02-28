import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

import { Header } from "@/components/header/header";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL("https://bricksviewer.com"),
  generator: "BricksViewer.com",
  title: "BricksViewer.com",
  description:
    "We provide our clients with the best properties and property management services in India. We are a one-stop shop for all your property needs. We provide a wide range of services, including buying, selling, renting, and leasing.",
  keywords: [
    "Real Estate",
    "Property Management",
    "Property Monitoring",
    "Construction",
    "Rental Assistance",
    "Interior Design",
    "Real Estate Buying/Selling",
    "BricksViewer.com",
    "WebArc.One",
    "Bricks Viewer",
  ],
  icons: "/favicon.png",
  applicationName: "BricksViewer.com",
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "BricksViewer.com" },
    { name: "WebArc.One", url: "https://webarc.one" },
  ],
  creator: "WebArc.One",
  publisher: "BricksViewer.com",
  formatDetection: {
    email: true,
    telephone: true,
    address: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-IN": "/en-IN",
    },
  },
  openGraph: {
    type: "website",
    url: "https://bricksviewer.com",
    title: "BricksViewer.com",
    description:
      "We provide our clients with the best properties and property management services in India. We are a one-stop shop for all your property needs. We provide a wide range of services, including buying, selling, renting, and leasing.",
    images: [
      {
        url: "/favicon.png",
        width: 800,
        height: 800,
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
      <head>
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta
          property="og:description"
          content="We provide our clients with the best properties and property management services in India. We are a one-stop shop for all your property needs. We provide a wide range of services, including buying, selling, renting, and leasing."
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9649742947453624"
          crossOrigin="anonymous"
        ></script>
      </head>
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
