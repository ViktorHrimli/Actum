import Form from "@/libs/pages/components/form/Form";

import styles from "./modalForm.module.scss";

import { colorEnums } from "./enumsForm/enumsForm";

export default function ModalForm({ type, setIsOpenModal }) {
  const { color } = colorEnums[type];
  return ( 
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_form}>
          <div className={styles.closed}
            onClick={() => setIsOpenModal(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill={color}>
              <path d="M23.3327 23.3327L4.66602 4.66602M23.3327 4.66602L4.66602 23.3327" stroke={color} strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
            <Form type={type}/>
        </div>
      </div>
    </section>
  )
}