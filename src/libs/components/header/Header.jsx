import Link from "next/link";

import Navigation from "@/libs/components/nav/Navigation";
import { PathsPageHeader } from "./enums/enum";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div>
      <Navigation links={PathsPageHeader} />
    </div>
  );
}
