import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

import styles from "./page.module.scss";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

const {
  API_LAYOUT,
  QUERY_LAYOUT,
  QUERY_MODAL_FORM,
  API_MODAL_FORM,
  API_LOCALIZATION,
} = process.env;

export async function generateMetadata({ params, searchParams }) {
  return makeSeoTemplate(API_LAYOUT);
}

export default async function RootLayout({ children }) {
  const UA = await getStaticPage(API_LAYOUT, QUERY_LAYOUT);

  const RU = await getStaticPage(API_LAYOUT, QUERY_LAYOUT, API_LOCALIZATION);

  const {
    data: {
      attributes: { Form: modalUa },
    },
  } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM);
  const {
    data: {
      attributes: { Form: modalRu },
    },
  } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM, API_LOCALIZATION);

  const {
    data: {
      attributes: { contacts_panel },
    },
  } = UA;

  return (
    <html lang="uk-UA">
      <body className={montserrat.className}>
        <Header ru={RU} uk={UA} />
        <main className={styles.page}>
          <ContactPanel {...contacts_panel} ruForm={modalRu} uaForm={modalUa} />
          {children}
        </main>

        <Footer ruFooter={RU} uaFooter={UA} ruForm={modalRu} uaForm={modalUa} />
      </body>
    </html>
  );
}
