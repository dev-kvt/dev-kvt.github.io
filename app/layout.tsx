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
      <body className="min-h-full flex bg-white">
        <Sidebar />
        <main className="flex-1 ml-[220px] relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
