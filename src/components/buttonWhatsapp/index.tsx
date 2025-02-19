import { Link } from "react-router";
import wpp from '../../assets/whatssapp.svg';
import styles from './styles.module.scss';

export function ButtonWhatsapp() {
  return (
    <>
      <Link
        to="https://api.whatsapp.com/send?phone=5587981157269&text=Gostaria%20de%20mais%20informações%20sobre%20seu%20trabalho%20de%20programação%20web"
        target="_blank"
        className={styles.buttonWpp}
      >
        <img
          src={wpp}
          alt="Logo do Whatsapp"
        />
        <span className={styles.tooltipText}>Agende seu horário</span>
      </Link>
    </>
  )
}