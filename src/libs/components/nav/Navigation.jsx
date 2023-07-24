import Link from "next/link";

import styles from "./Navigation.module.scss";

export default function Navigation({ links }) {
  return (
    <ul>
      {links.map(({ path, title }, id) => (
        <li key={id}>
          <Link href={path}>{title.toUpperCase()}</Link>
        </li>
      ))}
    </ul>
  );
}
