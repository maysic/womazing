"use client"

import { Metadata } from 'next';
import styles from './page.module.css'
import useStore from '../store/store';
import { card } from '../types';
import NavInPages from '../components/navInPages/navInPages';


export default function Bags() {
  const { bags ,removeProduct} = useStore()
  let storage = localStorage.getItem('product')
  let listStorage
  if (storage) {
    listStorage = JSON.parse(storage)
  }
  let list = bags || listStorage

  let count = 0
  let copy = 0

  

  for (let i = 0; i < list.length; i++) {
    if(list[i].id == list[i].id) {
      count++ 
      copy++
      if(copy > 1) {
        list.splice(i , 1)
      }
    }
  }
  

  function handleDel(id:number) {
    removeProduct(id)
    for (let i = 0; i < list.length; i++) {
      if(list[i].id === id) {
        list.splice(i, 1)
      }
      
    }
    console.log(list);
  }
  return ( 
    
      <section className={styles.bags}>
        <div className="container">
          <NavInPages
            header='Корзина'
            start='Магазин'
            dest='Корзина'
          />


          {list.length > 0 ? 
          
          (<div>
            {list && list.map((item: card) => (
              <div className={styles.product} key={item.id}>
                <img src={item.image} alt={item.title} className={styles.img}/>
                <h2 className={styles.title}>
                  {item.title}
                </h2>
                <span>
                  {count}
                </span>
                <div className={styles.box}>
                  <span className={styles.price}>
                    {item.price} $
                  </span>
                  <button className={styles.del} onClick={() => handleDel(item.id)}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector 3" d="M1 1L13 13M13 1L1 13" stroke="black"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>)
        : (<div>
          <h1>
            В корзине пока ничего нет
          </h1>
        </div>)
        }

        

        </div>
      </section>
   );
}

