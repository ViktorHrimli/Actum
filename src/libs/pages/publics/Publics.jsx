import styles from "./Publics.module.scss";

import PublicList from "./publics_list/PublicList";
import Search from "@/shared/components/search/Search";

export default function Publics({ blog_list }) {
  const totalPages = 70; // Общее количество страниц
  let currentPage = 10; // Текущая страница

  function goToPreviousPage() {
    if (currentPage > 1) {
      currentPage--;
      // Здесь можно добавить логику обновления содержимого страницы
      console.log("Переход на предыдущую страницу:", currentPage);
    } else {
      console.log("Вы находитесь на первой странице");
    }
  }

  function goToNextPage() {
    if (currentPage < totalPages) {
      currentPage++;
      // Здесь можно добавить логику обновления содержимого страницы
      console.log("Переход на следующую страницу:", currentPage);
    } else {
      console.log("Вы находитесь на последней странице");
    }
  }

  function filterBlogs(blog_list) {
    return blog_list.filter((blog, id) => id < pageCount);
  }

  const data = blog_list.filter((blog, id) => id < 5);
  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <PublicList blog_list={data} />
      </div>

      <Search />
    </section>
  );
}
