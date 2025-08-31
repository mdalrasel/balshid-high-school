import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয়",
  description: "বলশীদ হাজী আকুব আলী উচ্চ  বিদ্যালয়ের অফিসিয়াল ওয়েবসাইট",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-2 `}
      >
        <Navbar />
          <main className="min-h-[calc(100vh-175px)">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
