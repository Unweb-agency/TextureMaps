import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/common/NavigationBar";
import Footer from "@/components/common/Footer";
import { headers } from "next/headers";
import LayoutWrapper from "@/style/LayoutWrapper";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Texture Maps",
  description: "Texture Maps",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const h = await headers();
  const pathname = h.get("x-pathname") || "/";
  const PathIsHome = (pathname === "/")

  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable} antialiased`}
      >
        <LayoutWrapper>
          <NavigationBar />
          <Toaster
            position="top-center"
            toastOptions={{
              className: "z-999",
            }}
          />
          {children}
          <div className="w-full px-4 sm:px-5 pb-3">
            <Footer />
          </div>
        </LayoutWrapper>
      </body>
    </html>
  );
}
