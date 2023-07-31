import styles from "./SideBar.module.scss";

export default function SideBar() {
  return (
    <div className={styles.menu}>
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">КОМПАНІЯ</div>
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="text-wrapper-2">Військовий адвокат</div>
            <img
              className="basil-viber-outline"
              alt="Basil viber outline"
              src="basil-viber-outline.svg"
            />
            <img
              className="fontisto-telegram"
              alt="Fontisto telegram"
              src="fontisto-telegram.svg"
            />
            <div className="text-wrapper-3">Кримінальні справи</div>
            <img
              className="ic-twotone-whatsapp"
              alt="Ic twotone whatsapp"
              src="ic-twotone-whatsapp.svg"
            />
            <img
              className="clarity-form-line"
              alt="Clarity form line"
              src="clarity-form-line.svg"
            />
          </div>
          <div className="text-wrapper-4">НАШІ ПОСЛУГИ</div>
          <div className="text-wrapper-5">КОНСУЛЬТАЦІЯ</div>
          <div className="text-wrapper-6">КОНТАКТИ</div>
          <div className="text-wrapper-7">Сімейні справи</div>
          <div className="text-wrapper-8">Конкретна тема</div>
          <div className="group">
            <div className="overlap-group-2">
              <div className="text-wrapper-9">+38-067-179-72-13</div>
              <div className="text-wrapper-10">+38-050-333-48-97</div>
            </div>
          </div>
        </div>
        <div className="akar-icons-cross">
          <img className="vector" alt="Vector" src="vector.svg" />
        </div>
        <img
          className="actum-signmark"
          alt="Actum signmark"
          src="actum-signmark-02-1.png"
        />
      </div>
    </div>
  );
}
