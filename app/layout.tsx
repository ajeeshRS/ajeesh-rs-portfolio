import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Ajeesh RS | Web developer",
  description: "Ajeesh's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
