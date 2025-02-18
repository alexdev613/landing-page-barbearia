import { Link } from "react-router";
import styles from './styles.module.scss';

export function Hero() {
  return (
    <main className={styles.hero}>
      <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE</h1>
      <p>Horário de funcionamento: 09:00 às 19:00</p>
      <Link to="#" className={styles.buttonContact} target="_blank">
        Agendar horário
      </Link>
    </main>
  )
}