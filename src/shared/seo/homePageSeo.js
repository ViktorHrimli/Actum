export default function HomeSeo() {
  return (
    // <div
    //   itemScope
    //   itemType="http://schema.org/Organization"
    //   style={{ display: "none" }}
    // >
    //   <a itemProp="url" href="https://www.actum.com.ua/">
    //     <div itemProp="name">Адвокатське об’Єднання</div>
    //   </a>
    //   <div itemProp="description">
    //     Ми, Адвокатське Об’єднання Актум, надаємо ефективну правову допомогу та
    //     захист, поєднуючи традиційну юриспруденцію з інформаційними
    //     технологіями.
    //   </div>
    //   <div
    //     itemProp="address"
    //     itemScope
    //     itemType="http://schema.org/PostalAddress"
    //   >
    //     <span itemProp="streetAddress">
    //       вул. Оболонська набережна 15, корпус 5
    //     </span>
    //     <span itemProp="addressLocality">м. Київ,</span>
    //     <span itemProp="postalCode">04210</span>
    //     <span itemProp="addressCountry">Україна</span>
    //   </div>
    //   <img
    //     itemProp="logo"
    //     src="https://res.cloudinary.com/de0iwhqf4/image/upload/v1700610685/LOGO_c96402cb23.png"
    //   />
    //   ☎: <span itemProp="telephone">+38 (098) 665-05-40</span>
    //   ☎:<span itemProp="faxNumber">+38 (050) 665-05-60</span>
    //   ✉: <span itemProp="email">info@actum.com.ua</span>
    //   <time itemProp="openingHours" dateTime="8:00 до 22:00">
    //     без вихідних 8:00 до 22:00
    //   </time>
    //   <span itemScope itemType="http://schema.org/LocalBusiness">
    //     <time itemProp="openingHours" dateTime="8:00 до 22:00">
    //       без вихідних 8:00 до 22:00
    //     </time>
    //   </span>
    // </div>
    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      image: [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg",
      ],
      name: "Dave's Steak House",
      address: {
        "@type": "PostalAddress",
        streetAddress: "148 W 51st St",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10019",
        addressCountry: "US",
      },
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Lillian Ruiz",
        },
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.761293,
        longitude: -73.982294,
      },
      url: "https://www.example.com/restaurant-locations/manhattan",
      telephone: "+12122459600",
      servesCuisine: "American",
      priceRange: "$$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday"],
          opens: "11:30",
          closes: "22:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Wednesday", "Thursday", "Friday"],
          opens: "11:30",
          closes: "23:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "16:00",
          closes: "23:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "16:00",
          closes: "22:00",
        },
      ],
      menu: "https://www.example.com/menu",
      acceptsReservations: "True",
    }
  );
}
