import { Geist, Geist_Mono } from "next/font/google";
import { Bai_Jamjuree } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/utility.css";
import "@/styles/about-style.css";
import "@/styles/product-style.css";
import Loader from "../components/Loader";
import { ProductsData } from "../ProductContext/ProductsData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          "${geistSans.variable} ${geistMono.variable} ${baiJamjuree.variable}"
        }
      >
        <Loader />
        <ProductsData>{children}</ProductsData>
      </body>
    </html>
  );
}
