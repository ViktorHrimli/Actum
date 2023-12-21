import Script from "next/script";

export default function HomeSeo() {
  return (
    <Script id="homePage" type="application/ld+json">
      {{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Адвокатське об’Єднання",
        address: {
          "@type": "PostalAddress",
          streetAddress: "вул. Оболонська набережна 15, корпус 5",
          addressLocality: "м. Київ",
          addressRegion: "UK",
          postalCode: "04210",
          addressCountry: "Україна",
        },
        url: "https://www.actum.com.ua",
        telephone: "+38 (098) 665-05-40",
        faxNumber: "+38 (050) 665-05-60",
        openingHours: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "08:00",
            closes: "22:00",
          },
        ],
      }}
    </Script>
  );
}
