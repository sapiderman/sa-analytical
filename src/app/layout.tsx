import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sa-analytical.com"),
  title: "SA-Analytical — Precision in Strategy",
  description:
    "Boutique strategy consulting. Helping teams develop strategies, plan, solve problems, and make decisions through high-level facilitation and BI.",
  openGraph: {
    title: "SA-Analytical — Precision in Strategy",
    description:
      "Boutique strategy consulting. Helping teams develop strategies, plan, solve problems, and make decisions through high-level facilitation and BI.",
    url: "https://sa-analytical.com",
    siteName: "SA-Analytical",
    images: [
      {
        url: "/images/SA-logo.png",
        width: 1254,
        height: 1254,
        alt: "SA-Analytical logo",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/images/SA-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}