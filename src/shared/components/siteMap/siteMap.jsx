import styles from "./siteMap.module.scss";
import Link from "next/link";

export default function SiteMap({ list }) {
  return (
    <section className={styles.section}>
      <div className={styles.container_decor}>
        <div className={styles.gradient}></div>
        <div className={styles.icons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M6.8745 26.9814C5.3295 25.3404 4.5 23.4999 4.5 20.5164C4.5 15.2664 8.1855 10.5609 13.545 8.23438L14.8845 10.3014C9.882 13.0074 8.904 16.5189 8.514 18.7329C9.3195 18.3159 10.374 18.1704 11.4075 18.2664C14.1135 18.5169 16.2465 20.7384 16.2465 23.4999C16.2465 24.8923 15.6934 26.2276 14.7088 27.2122C13.7242 28.1968 12.3889 28.7499 10.9965 28.7499C10.2265 28.7431 9.4655 28.5833 8.75784 28.2797C8.05018 27.9761 7.40998 27.5347 6.8745 26.9814ZM21.8745 26.9814C20.3295 25.3404 19.5 23.4999 19.5 20.5164C19.5 15.2664 23.1855 10.5609 28.545 8.23438L29.8845 10.3014C24.882 13.0074 23.904 16.5189 23.514 18.7329C24.3195 18.3159 25.374 18.1704 26.4075 18.2664C29.1135 18.5169 31.2465 20.7384 31.2465 23.4999C31.2465 24.8923 30.6934 26.2276 29.7088 27.2122C28.7242 28.1968 27.3889 28.7499 25.9965 28.7499C25.2265 28.7431 24.4655 28.5833 23.7578 28.2797C23.0502 27.9761 22.41 27.5347 21.8745 26.9814Z"
              fill="#F8F5F5"
            />
          </svg>
        </div>
        <p className={styles.text_decor}>діємо задля результату</p>
      </div>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <a href="/" className={styles.title}>
            головна
          </a>
          <a href="/teamactum" className={styles.title}>
            компанія
          </a>
          <a href="/blog-3-1" className={styles.title}>
            Наші публікації
          </a>
          <a href="/services" className={styles.title}>
            наші послуги
          </a>
          <a href="/book" className={styles.title}>
            консультація
          </a>
          <a href="/contacts" className={styles.title}>
            контакти
          </a>
        </div>
        <div className={styles.position}>
          <div className={styles.container_link}>
            {list.map((item, id) => (
              <div key={id} className={styles.box}>
                <Link href={item.path}>
                  <h3 className={styles.title_link}>{item.Title}</h3>
                </Link>

                <ul className={styles.list}>
                  {item.List.map((item, id) => (
                    <li key={id} className={styles.link_box}>
                      <span className={styles.marker}></span>
                      <a href={item.path} className={styles.text}>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
