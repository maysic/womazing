import Link from 'next/link';
import styles from './nav.module.css'

export default function Nav() {
  return ( 
    <nav>
      <Link href='/' className={styles.link}>Главная</Link>
      <Link href='/shop' className={styles.link}>Магазин</Link>
      <Link href='/about' className={styles.link}>О бренде</Link>
      <Link href='/contact' className={styles.link}>Контакты</Link>
    </nav>
   );
}

