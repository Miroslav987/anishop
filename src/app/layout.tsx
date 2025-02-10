import type { Metadata } from "next";
import "./globals.css";
import ModalProvider from "@/context/ModalProvider";
import DetailsInfoProvider from "@/context/CardDetailsInfoProvidre";
import StoreProvider from "./StoreProvider";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "almurut",
  description: "shop",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <StoreProvider>
          <ModalProvider>
            <DetailsInfoProvider>
              <NavBar/>
                {children}
              <Footer/>
            </DetailsInfoProvider>
          </ModalProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
