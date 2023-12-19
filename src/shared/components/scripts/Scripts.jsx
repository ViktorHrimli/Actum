import Script from "next/script";

export default function Scripts() {
  return (
    <>
      <Script
        strategy="afterInteractive"
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
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=false;j.src=
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
        strategy="afterInteractive"
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
          var script = document.createElement('script'); script.async = false;
        script.type = 'text/javascript'; var target =
        'https://www.clickcease.com/monitor/stat.js'; script.src = target;var
        elem = document.head;elem.appendChild(script);
      `}
      </Script>
    </>
  );
}
