import { ProductList, card } from "@/app/types";
import { Metadata } from "next";
import styles from './page.module.css'
import Link from "next/link";
import useStore from "@/app/store/store";





async function getData(id:string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  return response.json()
}

export type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
  const item = await getData(id)
  return {
    title: item.title
  }
}



export default async function CardItem({params: { id }}: Props) {

  
  const {bags, addProduct} = useStore()
  const item: card = await getData(id)
  let Local: ProductList = []

  function handleAddProduct(product: card) {
    addProduct(product)
    Local.push(product)
    localStorage.setItem('product', JSON.stringify(Local))
  }
  



  return ( 
    <section className={styles.cardItem}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.imgBlock}>
            <img src={item.image} alt={item.title} className={styles.img} />
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.info}>
              <h2 className={styles.title}>
                {item.title}
              </h2>
              <p className={styles.desc}>
                {item.description}
              </p>
              <span className={styles.price}>
                {item.price} $
              </span>
            </div>
            <div className={styles.btnBlock}>
              <Link href='/shop' className={styles.back}>
                Назад
              </Link>
              <button className={styles.add} onClick={() => handleAddProduct(item)}>
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}