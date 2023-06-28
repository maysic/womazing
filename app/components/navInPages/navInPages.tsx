import styles from './navInPages.module.css'

interface INavInPages {
  header: string
  start: string
  dest: string
}

export default function NavInPages({header, start, dest}: INavInPages) {
  return ( 
    <div className={styles.nav}>
      <h2 className={styles.header}>
        {header}
      </h2>
      <div className={styles.box}>
        <span className={styles.start}>{start} &mdash;</span>
        <span className={styles.dest}>{dest}</span>
      </div>
    </div>
);
}

