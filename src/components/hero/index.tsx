import { Link } from "react-router";
import styles from './styles.module.scss';

export function Hero() {
  return (
    <main className={styles.hero} data-aos="fade-up" data-aos-delay="400">
      <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE</h1>
      <p>Horário de funcionamento: 09:00 às 19:00</p>
      <Link
        to="https://api.whatsapp.com/send?phone=5587981157269&text=Gostaria%20de%20mais%20informações%20sobre%20seu%20trabalho%20de%20programação%20web"
        className={styles.buttonContact}
        target="_blank"
      >
        Agendar horário
      </Link>
    </main>
  )
}