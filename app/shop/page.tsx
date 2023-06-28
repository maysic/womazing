import { Metadata } from 'next';
import styles from './page.module.css'
import NavInPages from '../components/navInPages/navInPages';
import { useCategory } from '../hooks/useCategory';
import { card } from '../types';
import Card from '../components/card/card';
import { MouseEventHandler, useEffect, useMemo, useState } from 'react';



export const metadata: Metadata = {
  title: 'Товары бренда Womazing',
  description: 'Товары бренда Womazing',
}

export interface ICategories  {
  id: string
  name: string
  active: boolean
}

let categories = [
  {
    id:"men's clothing",
    name: "Мужское",
    active: true
  },
  {
    id:"women's clothing",
    name: "Женское",
    active: false
  },
  {
    id:"jewelery",
    name: "Украшения",
    active: false
  },
  {
    id:"electronics",
    name: "Электроника",
    active: false
  },
]


export default  function Shop() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    async function Initial() {
      let mens = await useCategory("men's clothing")
      setCards(mens)
    }
    Initial()
  }, [])
 

  function changeActive(arr: ICategories[], id: string) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].active = false
      if(arr[i].id === id) {
        arr[i].active = true
      }
    }
  }


  async function HandleChange(id: string) {
    const category = await useCategory(id)
    setCards(category)
    changeActive(categories, id)
  }



  return ( 
    <section className={styles.shop}>
      <div className='container'>
        <div className={styles.content}>
          <NavInPages
            header='Магазин'
            start='Главная'
            dest='Магазин'
          />
        </div>
        <div className={styles.categories}>
         {categories && categories.map((item : ICategories) => 
         item.active == false ? 
          (
          <button key={item.id} className={styles.btn} onClick={() => HandleChange(item.id)}>
            {item.name}
          </button>
         ) : 
          <button key={item.id} className={styles.active} onClick={() => HandleChange(item.id)}>
             {item.name}
          </button>
         ) }
        </div>
        <div className={styles.cardBox}>
          {cards ? cards.map((item: card) => (
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
          )) : <></>}
        </div>
      </div>
    </section>
   );
}

