import Link from 'next/link';
import Logo from '../header/logo/logo';
import Nav from '../header/nav/Nav';
import styles from './footer.module.css'

export default function Footer() {
  return ( 
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <Logo/>
            <Nav/>
          </div>

          <div className={styles.contact}>
            <a href="tel:+74958235412" className={styles.link}>
              +7 (495) 823-54-12
            </a>
            <a href="mailto:hello@womazing.com" className={styles.link}>
              hello@womazing.com
            </a>
          </div>
        </div>
        <div className={styles.contentLinks}>
          <div className={styles.textBlock}>
            <span className={styles.text}>© Все права защищены</span>
            <Link href='/politics' className={styles.text}>Политика конфиденциальности</Link>
            <Link href='/offers' className={styles.text}>Публичная оферта</Link>
          </div>
          <div className={styles.right}>
            <div className={styles.socialBlock}>
                <Link href='/' className={styles.social}>
                    <img src="/inst.svg" alt="inst"  className={styles.icon}/>
                </Link>
                <Link href='/' className={styles.social}>
                    <img src="/facebook.svg" alt="facebook"  className={styles.icon}/>
                </Link>
                <Link href='/' className={styles.social}>
                    <img src="/twitter.svg" alt="twitter"  className={styles.icon}/>
                </Link>
            </div>
            <div className={styles.cardBlock}>
              <Link href='/' className={styles.card}>
                  <img src="/visa.svg" alt="visa"  className={styles.visa}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
   );
}

