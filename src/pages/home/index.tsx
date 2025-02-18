import styles from './styles.module.scss';
import { About } from "../../components/about";
import { Services } from '../../components/barberServices';

export default function Home() {
  return (
  <>
    <div className={styles.container}>
      <About/>
    </div>
      <Services/>
  </>
  )
}