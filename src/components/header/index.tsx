import styles from './styles.module.scss'
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import { Hero } from '../hero';

export function Header() {
  return (
    <header>
      <nav className={styles.headerContent}>
        <div className={styles.headerIcons} data-aos="fade-down">
          <Link to="https://www.facebook.com/" target='_blank' className={styles.link}>
            <FaFacebook className={styles.icon} />
          </Link>
          <Link to="https://www.instagram.com/" target='_blank' className={styles.link}>
            <FaInstagram className={styles.icon}/>
          </Link>
          <Link to="https://www.tiktok.com/" target='_blank' className={styles.link}>
            <FaTiktok className={styles.icon}/>
          </Link>
        </div>

        <div className={styles.headerLogo} data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
          <img
            src={logo}
            alt="Logo da barbearia"
            data-aos="flip-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          />
        </div>

        <div data-aos="fade-down">
          <Link
            to="https://api.whatsapp.com/send?phone=5587981157269&text=Gostaria%20de%20mais%20informações%20sobre%20seu%20trabalho%20de%20programação%20web"
            target='_blank'
            className={styles.headerButton}
          >
            Agendar horário
          </Link>
        </div>
      </nav>

      <Hero />

    </header>
  )
}
