import styles from './styles.module.scss';
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router";
import logo from '../../assets/logo.svg';

export function Footer() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.528273362231!2d-46.55295328246826!3d-23.692821966434717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42342d8532fd%3A0x46ee55e49e87f204!2sShopping%20Metr%C3%B3pole!5e0!3m2!1spt-BR!2sbr!4v1739921831753!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
      <footer className={styles.footer}>
        <div className={styles.footerIcons}>
          <Link to="https://www.facebook.com/" target='_blank' className={styles.link}>
            <FaFacebook className={styles.icon} />
          </Link>
          <Link to="https://www.instagram.com/" target='_blank' className={styles.link}>
            <FaInstagram className={styles.icon} />
          </Link>
          <Link to="https://www.tiktok.com/" target='_blank' className={styles.link}>
            <FaTiktok className={styles.icon} />
          </Link>
        </div>

        <div>
          <img
            src={logo}
            alt="Logo da Barbearia"
          />
        </div>

        <p>Copyright 2025 | Dev Barbearia - Todos direitos reservados.</p>
        <p>Desenvolvido por Alex Nascimento</p>

      </footer>
    </>
  )
}