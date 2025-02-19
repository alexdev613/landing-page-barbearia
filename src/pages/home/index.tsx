import styles from './styles.module.scss';
import { About } from "../../components/about";
import { Services } from '../../components/barberServices';
import { Footer } from '../../components/footer';
import { ButtonWhatsapp } from '../../components/buttonWhatsapp';

export default function Home() {
  return (
  <>
    <div className={styles.container}>
      <About/>
    </div>
      <Services/>
      <Footer/>
      <ButtonWhatsapp/>
  </>
  )
}