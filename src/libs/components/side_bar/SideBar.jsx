import Image from "next/image";
import styles from "./SideBar.module.scss";

import Logo from "@/assets/svg/LOGO.png";
import BtnSideBar from "@/libs/components/btn_side_bar/BtnSideBar";
export default function SideBar({ onClick, isBarSide }) {
  return (
    <div className={styles.menu}>
      <div className={styles.main_gradient}></div>
      <div className={styles.head_conteiner}>
        <div className={styles.logo_conteiner}>
          <Image src={Logo} fill />
        </div>

        <BtnSideBar onClick={onClick} isBarSide={isBarSide} />
      </div>
    </div>
  );
}
