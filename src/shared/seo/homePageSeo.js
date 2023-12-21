export default function HomeSeo() {
  return (
    <div
      itemScope
      itemType="http://schema.org/Organization"
      style={{ display: "none" }}
    >
      <a itemProp="url" href="https://www.actum.com.ua/">
        <div itemProp="name">Адвокатське об’Єднання</div>
      </a>
      <div itemProp="description">
        Ми, Адвокатське Об’єднання Актум, надаємо ефективну правову допомогу та
        захист, поєднуючи традиційну юриспруденцію з інформаційними
        технологіями.
      </div>
      <div
        itemProp="address"
        itemScope
        itemType="http://schema.org/PostalAddress"
      >
        <span itemProp="streetAddress">
          вул. Оболонська набережна 15, корпус 5
        </span>
        <span itemProp="addressLocality">м. Київ,</span>
        <span itemProp="postalCode">04210</span>
        <span itemProp="addressCountry">Україна</span>
      </div>
      <img
        itemProp="logo"
        src="https://res.cloudinary.com/de0iwhqf4/image/upload/v1700610685/LOGO_c96402cb23.png"
      />
      ☎: <span itemProp="telephone">+38 (098) 665-05-40</span>
      ☎:<span itemProp="faxNumber">+38 (050) 665-05-60</span>
      ✉: <span itemProp="email">info@actum.com.ua</span>
      <time itemProp="openingHours" dateTime="8:00 до 22:00">
        без вихідних 8:00 до 22:00
      </time>
      <span itemScope itemType="http://schema.org/LocalBusiness">
        <div
          itemProp="address"
          itemScope
          itemType="http://schema.org/PostalAddress"
        >
          <span itemProp="streetAddress">
            вул. Оболонська набережна 15, корпус 5
          </span>
          <span itemProp="addressLocality">м. Київ,</span>
          <span itemProp="postalCode">04210</span>
          <span itemProp="addressCountry">Україна</span>
        </div>
        <img
          itemProp="logo"
          src="https://res.cloudinary.com/de0iwhqf4/image/upload/v1700610685/LOGO_c96402cb23.png"
        />
        ☎: <span itemProp="telephone">+38 (098) 665-05-40</span>
        ☎:<span itemProp="faxNumber">+38 (050) 665-05-60</span>
        ✉: <span itemProp="email">info@actum.com.ua</span>
        <time itemProp="openingHours" dateTime="8:00 до 22:00">
          без вихідних 8:00 до 22:00
        </time>
      </span>
    </div>
  );
}
