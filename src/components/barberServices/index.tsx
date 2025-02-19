import styles from './styles.module.scss';
import corte1 from '../../assets/corte1.png';
import corte2 from '../../assets/corte2.png';
import corte3 from '../../assets/corte3.png';

export function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.servicesContent}>
        <h2>Serviços</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptate at veniam a, enim maiores sit et quae nam assumenda dolorum omnis optio cum laudantium officia voluptates dignissimos culpa corporis.</p>
      </div>

      <section className={styles.haircuts}>
        <div className={styles.haircut} data-aos="fade-up" data-aos-delay="150">
          <img
            src={corte1}
            alt="Corte Degrade"
          />
          <div className={styles.haircutInfo}>
            <strong>Corte normal</strong>
            <button>
              R$ 45,00
            </button>
          </div>
        </div>
        
        <div className={styles.haircut} data-aos="fade-up" data-aos-delay="300"  data-aos-duration="500">
          <img
            src={corte2}
            alt="Corte Degrade"
          />
          <div className={styles.haircutInfo}>
            <strong>Barba completa</strong>
            <button>
              R$ 35,00
            </button>
          </div>
        </div>
        
        <div className={styles.haircut} data-aos="fade-up" data-aos-delay="450" data-aos-duration="700">
          <img
            src={corte3}
            alt="Corte Degrade"
          />
          <div className={styles.haircutInfo}>
            <strong>Corte e barba</strong>
            <button>
              R$ 85,00
            </button>
          </div>
        </div>

      </section>
    </section>
  )
}