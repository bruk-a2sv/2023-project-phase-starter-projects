import { NavBar } from "@/components/layout/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: "400",
  subsets: ["latin"],
});
import StateProvider from "@/components/provider/StateProvider";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col gap-20 ${inter.className}`}>
        <header>
          <NavBar />
        </header>
        <StateProvider>
          <main>{children}</main>
        </StateProvider>
        <Footer />
      </body>
    </html>
  );
}
