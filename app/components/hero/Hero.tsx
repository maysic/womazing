import Link from 'next/link';
import styles from './hero.module.css'

export default function Hero() {
  return ( 
    <section className={styles.hero}>
      <div className={styles.back}></div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.header}>
            Новые поступления в этом сезоне
            </h1>
            <p className={styles.text}>
               Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.
            </p>
           <div className={styles.link_box}>
              <Link href='/shop' className={styles.link}>
                Открыть магазин
              </Link>
           </div>
          </div>
          <div className={styles.right}>
            <img src='/main-1.jpg' alt='woman' className={styles.woman_one}/>
            <img src='/main-2.jpg' alt='woman' className={styles.woman_two}/>
            <img src='/main-3.jpg' alt='woman' className={styles.woman_three}/>
          </div>
        </div>
      </div>
    </section>
   );
}

