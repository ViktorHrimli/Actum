"use client";
import Script from "next/script";

import { useEffect, useState } from "@/shared/hooks/hooks";

export default function Scripts() {
  const [isClient, setIsClient] = useState(false);

  // const KEY = "510914";

  // useEffect(() => {
  //   window.BinotelCallTracking[KEY].replacePhoneNumbersOnDynamicContent()
  // }, []);

  useEffect(() => {
    setTimeout(() => setIsClient(true), 4000);
  }, []);
  return (
    isClient && (
      <>
        <Script
          strategy="afterInteractive"
          rel=""
          async={true}
          src="https://www.googletagmanager.com/gtag/js?id=G-Q9Y47E76PM"
        ></Script>
        <Script strategy="afterInteractive" id="gtm" async={true}>
          {`
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-Q9Y47E76PM');
        `}
        </Script>
        {/*  mask */}
        <Script strategy="afterInteractive" id="google-tag" async={true} rel="">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MQMDB7V');
        `}
        </Script>
        {/* --- */}
        <Script
          strategy="afterInteractive"
          rel=""
          id="crazyegg"
          type="text/javascript"
          src="//script.crazyegg.com/pages/scripts/0119/8897.js"
          async={true}
        ></Script>
        <Script
          type="text/javascript"
          rel=""
          strategy="afterInteractive"
          async={true}
          id="click-case"
        >
          {`
          var script = document.createElement('script'); script.async = true;
        script.type = 'text/javascript'; var target =
        'https://www.clickcease.com/monitor/stat.js'; script.src = target;var
        elem = document.head;elem.appendChild(script);
      `}
        </Script>
      </>
    )
  );
}

// "use client";
// import Script from "next/script";

// import { useEffect, useState } from "@/shared/hooks/hooks";

// export default function Scripts() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setIsClient(true), 4000);
//   }, []);
//   return (
//     isClient && (
//       <>
//         <Script
//           strategy="afterInteractive"
//           async
//           src="https://www.googletagmanager.com/gtag/js?id=G-Q9Y47E76PM"
//         ></Script>
//         <Script strategy="lazyOnload" id="gtm">
//           {`
//           window.dataLayer = window.dataLayer || []; function gtag()
//           {dataLayer.push(arguments)}
//           gtag('js', new Date()); gtag('config', 'G-Q9Y47E76PM');
//         `}
//         </Script>
//         {/*  mask */}
//         <Script strategy="afterInteractive" id="google-tag">
//           {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=false;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-MQMDB7V');
//         `}
//         </Script>
//         {/* --- */}
//         <Script
//           strategy="lazyOnload"
//           id="crazyegg"
//           type="text/javascript"
//           src="//script.crazyegg.com/pages/scripts/0119/8897.js"
//           async="async"
//         ></Script>
//         <Script
//           type="text/javascript"
//           strategy="afterInteractive"
//           id="click-case"
//         >
//           {`
//           var script = document.createElement('script'); script.async = false;
//         script.type = 'text/javascript'; var target =
//         'https://www.clickcease.com/monitor/stat.js'; script.src = target;var
//         elem = document.head;elem.appendChild(script);
//       `}
//         </Script>
//       </>
//     )
//   );
// }
