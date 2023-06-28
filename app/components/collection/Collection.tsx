import Link from 'next/link'
import styles from './collection.module.css'
import { card } from '@/app/types'

async function getData() {
  const response = await fetch('https://fakestoreapi.com/products?limit=3')
  return response.json()
}


export default async function Collection() {
  const data = await getData()
  return ( 
    <section className={styles.collection}>
      <div className='container'>
        <h2 className={styles.header}>
          Новая коллекция
        </h2>
        <ul className={styles.box}>
          {data && data.map((item:card) => (
            <li key={item.id} className={styles.card}>
              <Link 
              className={styles.link}
              href={`shop/${item.title}`}
              >
                <img src={item.image} alt={item.title} className={styles.img}/>
                  
                <h3 className={styles.card__header}>
                    {item.title}
                </h3>
              <span className={styles.price}>
                {item.price} $
              </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
   );
}

