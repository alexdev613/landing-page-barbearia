import styles from './styles.module.scss';
import images from '../../assets/images.svg';

export function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <div>
          <img
            src={images}
            alt="Imagem sobre a barbearia"
          />
        </div>

        <div className={styles.aboutDescription}>
          <h2>Sobre</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus quod at nesciunt. Ratione reiciendis tempore, laudantium optio, qui sint laborum fugit quaerat et tempora cupiditate? Error mollitia maiores ab?</p>
          <p>Horário de funcionamento: <strong>09:00</strong> às <strong>19:00</strong></p>
        </div>
      </div>
    </section>
  )
}