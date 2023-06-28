'use client'
import { Metadata } from 'next';
import styles from './page.module.css'
import NavInPages from '../components/navInPages/navInPages';



export default function About() {

  return ( 
    <section className={styles.about}>
      <div className="container">
        <NavInPages
         header='О бренде'
         start='Главная'
         dest='О бренде'
        />
        <div className={styles.content}>
          <div className={styles.top}>
            <img src="/about-1.png" alt="photo" className={styles.img} />
            <div className={styles.textBlock}>
              <h3 className={styles.subHeader}>
                Идея и женщина
              </h3>
              <p className={styles.text}>
                Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.
              </p>
              <p className={styles.text}>
                Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.
              </p>
            </div>
          </div>
          <div className={styles.btm}>
            <img src="/about-2.png" alt="photo" className={styles.img} />
            <div className={styles.textBlock}>
              <h3 className={styles.subHeader}>
                Магия в деталях
              </h3>
              <p className={styles.text}>
              Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей. Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}

