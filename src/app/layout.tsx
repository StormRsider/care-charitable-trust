import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import LayoutClient from "../components/LayoutClient";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap"
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Care Village | Care Charitable Trust | Edappal, Kerala",
  description: "Compassion Through Care, Rehabilitation & Community Support. Offering high-quality physiotherapy, stroke rehab, palliative care, and community outreach in Edappal, Malappuram, Kerala.",
  keywords: [
    "Care Village",
    "Care Charitable Trust",
    "Physiotherapy Edappal",
    "Palliative Care Kerala",
    "Rehabilitation Center Malappuram",
    "Stroke rehabilitation Edappal",
    "Pain management Edappal",
    "Pediatric physiotherapy Malappuram",
    "Charitable physiotherapy Kerala"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
