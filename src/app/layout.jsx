import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

import styles from "./page.module.scss";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

const { API_LAYOUT, QUERY_LAYOUT } = process.env;

export async function generateMetadata({ params, searchParams }, parent) {
  return makeSeoTemplate(API_LAYOUT);
}

export default async function RootLayout({ children }) {
  const {
    data: {
      attributes: { Header: headers, Footer: footer, Navigation: service_page },
    },
  } = await getStaticPage(API_LAYOUT, QUERY_LAYOUT);

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
