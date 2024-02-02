"use client";

import { useEffect, useState, useRef } from "@/shared/hooks/hooks";

import PublicList from "./publics_list/PublicList";
import Search from "@/shared/components/search/Search";

import styles from "./Publics.module.scss";
import Pagination from "./pagination/Pagination";

export default function Publics({ blog_list }) {
  const [maxCount, setMaxCount] = useState(6);
  const [minCount, setMinCount] = useState(-1);
  const [dataBlog, setDataBlog] = useState([]);
  const [search, setSearch] = useState("");

  var blogListLength = blog_list.reverse().length || 0;


  function goToPreviousPage() {
    if (minCount > 0) {
      setMaxCount((prev) => prev - 6);
      setMinCount((prev) => prev - 6);
    }
  }

  const sectionRef = useRef(null);

    function goToNextPage() {
      if (maxCount < blogListLength) {
        setMaxCount((prev) => prev + 6);
        setMinCount((prev) => prev + 6);
      }
    }

  useEffect(() => {
    if (search) {
      setDataBlog(
        blog_list.filter((blog) => blog.title.includes(search.toUpperCase()))
      );
    } else {
      setDataBlog(blog_list.filter((_, id) => minCount < id && id < maxCount));
    }

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [minCount, maxCount, search]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.conteiner}>
        <PublicList blog_list={dataBlog} />
      </div>
      <div className={styles.wrapper_search_pagination}>
        <Pagination next={goToNextPage} prev={goToPreviousPage} />
        <Search setSearch={setSearch} value={search} />
      </div>
    </section>
  );
}
