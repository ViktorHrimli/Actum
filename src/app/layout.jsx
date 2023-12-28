import "./globals.scss";
import dynamic from "next/dynamic";
import Head from "next/head";

import { Montserrat } from "next/font/google";

const Footer = dynamic(() => import("@/libs/components/footer/Footer"));

import Header from "@/libs/components/header/Header";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";
import Scripts from "@/shared/components/scripts/Scripts";

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

import styles from "./page.module.scss";

const {
  API_LAYOUT,
  QUERY_LAYOUT,
  QUERY_MODAL_FORM,
  API_MODAL_FORM,
  API_LOCALIZATION,
} = process.env;

export async function generateMetadata() {
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
      attributes: { contacts_panel, seo },
    },
  } = UA;

  return (
    <html lang="uk-UA">
      <Scripts />
      <Head>
        <noscript>
          <a href="https://www.clickcease.com" rel="nofollow">
            <img src="https://monitor.clickcease.com" alt="ClickCease" />
          </a>
        </noscript>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQMDB7V"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        <StructureData data={seo["structuredData"]} />
      </Head>

      <body className={montserrat.className} suppressHydrationWarning={true}>
        <Header ru={RU} uk={UA} ruForm={modalRu} uaForm={modalUa} />
        <main className={styles.page}>
          <ContactPanel {...contacts_panel} ruForm={modalRu} uaForm={modalUa} />
          {children}
        </main>

        <Footer ruFooter={RU} uaFooter={UA} ruForm={modalRu} uaForm={modalUa} />
      </body>
    </html>
  );
}
