import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

import styles from "./page.module.scss";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

const { API_LAYOUT, QUERY_LAYOUT, QUERY_MODAL_FORM, API_MODAL_FORM } =
  process.env;

export async function generateMetadata({ params, searchParams }, parent) {
  return makeSeoTemplate(API_LAYOUT);
}

export default async function RootLayout({ children }) {
  const {
    data: {
      attributes: {
        Header: headers,
        Footer: footer,
        Navigation: service_page,
        contacts_panel,
      },
    },
  } = await getStaticPage(API_LAYOUT, QUERY_LAYOUT);

  const {
    data: {
      attributes: { Form: modal },
    },
  } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM);

  return (
    <html lang="uk-UA">
      <body className={montserrat.className}>
        <Header
          logo={headers["LOGO"]}
          nav={headers["Navigation"]}
          routes={service_page}
        />
        <main className={styles.page}>
          <ContactPanel form={modal} {...contacts_panel} />
          {children}
        </main>

        <Footer {...footer} form={modal} />
      </body>
    </html>
  );
}
