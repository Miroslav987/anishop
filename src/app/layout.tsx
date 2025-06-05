import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import ModalProvider from "@/context/ModalProvider";
import DetailsInfoProvider from "@/context/CardDetailsInfoProvidre";
import StoreProvider from "./StoreProvider";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

  export const metadata: Metadata = {
    title: "anishop",
    description: "Интернет-магазин anishop",
    keywords: 'anishop, Anishop, интернет магазин, анишоп',
    verification: {
      google: '1m40ZhpkaOBu8WRGiAlr705V3rbGKKkwx9qFUdNcQTE',
    },
    openGraph: {
      title: "anishop",
      description: "Интернет-магазин anishop",
      url: "https://anishops.vercel.app/",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/onlineshop-4f347.appspot.com/o/logo%2Fanishop.png?alt=media&token=edd7237f-7bf7-4742-ad6c-7b11a81014d0",
      ],
    },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
    <html lang="ru">
      <head>
      <meta name="theme-color" content="#20CF5B" />
      </head>
      <body className="antialiased">

        <StoreProvider>
          <ModalProvider>
            <DetailsInfoProvider>
              <NavBar />
              {children}
              <SpeedInsights />
              <Footer />
            </DetailsInfoProvider>
          </ModalProvider>
        </StoreProvider>
      </body>
    </html>
  </>
  );
}


