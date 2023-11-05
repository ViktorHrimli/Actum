import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";

import { getLayout, getSeo } from "@/shared/services/api/api";

import styles from "./page.module.scss";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export async function generateMetadata({ params, searchParams }, parent) {
  const {
    data: {
      attributes: { seo },
    },
  } = await getSeo(process.env["API_LAYOUT"]);

  return {
    title: seo["metaTitle"],
    description: seo["metaDescription"],
    name: "viewport",
    content: seo["metaViewport"],
    keywords: seo["keywords"],
    openGraph: {
      title: seo["metaTitle"],
      description: seo["metaDescription"],
      url: seo["canonicalURL"],
      type: "website",
      locale: "uk-UA",
      images: seo["metaImage"]["data"]["attributes"]["url"],
    },
  };
}

export default async function RootLayout({ children }) {
  const {
    data: {
      attributes: { Header: headers, Footer: footer, Navigation: service_page },
    },
  } = await getLayout();

  return (
    <html lang="uk-UA">
      <body className={montserrat.className}>
        <Header
          logo={headers["LOGO"]}
          nav={headers["Navigation"]}
          routes={service_page}
        />
        <main className={styles.page}>{children}</main>
        <Footer {...footer} />
      </body>
    </html>
  );
}
