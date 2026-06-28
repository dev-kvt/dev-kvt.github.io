import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divyansh Singh",
  description: "",
  icons:{
    icon:"/favicon.png",
    apple:"/favicon.png",
    other:{
      rel:"apple-touch-icon-precomposed",
      url:"/favicon.png"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white">
        <Sidebar />
        <main className="md:ml-[220px] pt-16 md:pt-0 relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
