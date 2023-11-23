import FormComponent from "../formComponent/FormComponent";

import { useEffect } from "@/shared/hooks/hooks";

import { colorEnums } from "./enumsForm/enumsForm";

import styles from "./modalForm.module.scss";

export default function ModalForm({ type, isOpenModal, setIsOpenModal, form }) {
  const {
    gradient: { color, border },
  } = colorEnums[type];

  useEffect(() => {
    const header = document.getElementById("header");

    if (isOpenModal) {
      header.style.display = "none";
    }

    return () => {
      header.style.display = "flex";
    };
  }, [isOpenModal]);
  return (
    <>
      <section className={styles.section}>
        <div
          onClick={() => setIsOpenModal(false)}
          className={styles.background_modal}
        ></div>
        <div className={styles.container}>
          <div className={styles[border]}>
            <div className={styles.container_form}>
              <div
                className={styles.closed}
                onClick={() => setIsOpenModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill={color}
                >
                  <path
                    d="M23.3327 23.3327L4.66602 4.66602M23.3327 4.66602L4.66602 23.3327"
                    stroke={color}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <FormComponent
                {...form}
                type={type}
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
