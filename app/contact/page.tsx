import { Metadata } from 'next';
import styles from './page.module.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import NavInPages from '../components/navInPages/navInPages';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Контакты бренда Womazing',
}



export default function Contact() {

  return ( 
      <section className={styles.contact}>
        <div className="container">
          <NavInPages
            header='Контакты'
            start='Главная'
            dest='Контакты'
          />

          <YMaps>
            <div>
              <Map defaultState={{ center: [55.687259, 37.531208], zoom: 13 }} className={styles.map}>
                <Placemark geometry={[55.687259, 37.531208]} />
              </Map>
              
            </div>
          </YMaps>

          <ul className={styles.contacts}>
            <li className={styles.item}>
              <span className={styles.subHeader}>
                Телефон
              </span>
              <a href="tel:+74958235412" className={styles.text}>
                +7 (495) 823-54-12
              </a>
            </li>
            <li className={styles.item}>
              <span className={styles.subHeader}>
                Е-mail
              </span>
              <a href="mailto:info@sitename.com" className={styles.text}>
                info@sitename.com
              </a>
            </li>
            <li className={styles.item}>
              <span className={styles.subHeader}>
                Адрес
              </span>
              <span className={styles.text}>
                г. Москва, ул. Строителей, 17
              </span>
            </li>
          </ul>

        </div>
      </section>
   );
}

