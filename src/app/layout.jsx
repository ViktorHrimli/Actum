import "./globals.scss";
import Head from "next/head";
import Script from "next/script";

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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Q9Y47E76PM"
      ></Script>
      <Script strategy="afterInteractive" id="gtm">
        {`
         window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-Q9Y47E76PM');
       `}
      </Script>
      <Script strategy="afterInteractive" id="google-tag">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MQMDB7V');
        `}
      </Script>
      <Script strategy="afterInteractive" id="fb-event">
        {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '463829011921350');
          fbq('track', 'PageView');`}
      </Script>
      <Script
        id="crazyegg"
        type="text/javascript"
        src="//script.crazyegg.com/pages/scripts/0119/8897.js"
        async="async"
      ></Script>

      <Script
        type="text/javascript"
        strategy="afterInteractive"
        id="click-case"
      >
        {`
          var script = document.createElement('script'); script.async = true;
        script.type = 'text/javascript'; var target =
        'https://www.clickcease.com/monitor/stat.js'; script.src = target;var
        elem = document.head;elem.appendChild(script);
      `}
      </Script>
      <Head>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<a href="https://www.clickcease.com" rel="nofollow">
          <img src="https://monitor.clickcease.com" alt="ClickCease" />
        </a>`,
          }}
        ></noscript>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-MQMDB7V"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>`,
          }}
        ></noscript>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img
          height="1"
          width="1"
          style="display:none"
          src="https://www.facebook.com/tr?id=463829011921350&ev=PageView&noscript=1"/>`,
          }}
        ></noscript>
      </Head>

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
