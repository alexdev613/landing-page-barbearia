import styles from './styles.module.scss'
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import { Hero } from '../hero';

export function Header() {
  return (
    <header>
      <nav className={styles.headerContent}>
        <div className={styles.headerIcons}>
          <Link to="/" className={styles.link}>
            <FaFacebook className={styles.icon} />
          </Link>
          <Link to="/" className={styles.link}>
            <FaInstagram className={styles.icon}/>
          </Link>
          <Link to="/" className={styles.link}>
            <FaTiktok className={styles.icon}/>
          </Link>
        </div>

        <div className={styles.headerLogo}>
          <img
            src={logo}
            alt="Logo da barbearia"
          />
        </div>

        <div>
          <Link to="/" className={styles.headerButton} >
            Agendar horário
          </Link>
        </div>
      </nav>

      <Hero />

    </header>
  )
}