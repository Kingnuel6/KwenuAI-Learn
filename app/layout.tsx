import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "KwenuAI Learn",
  description:
    "Free mini-courses for The AI Trybe — KwenuAI's WhatsApp learning community for non-technical Nigerians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} font-body antialiased flex min-h-screen flex-col`}
      >
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
