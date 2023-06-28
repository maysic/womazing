import { card } from "@/app/types";
import styles from './card.module.css'
import Link from "next/link";


export default function Card(props: card) {
  return ( 
    <Link href={`/shop/${props.id}`} key={props.id} className={styles.card}>
      <img src={props.image} alt={props.title} className={styles.img}/>
      <h3 className={styles.title}>
        {props.title}
      </h3>
      <span className={styles.price}>
        {props.price} $
      </span>
    </Link>
   );
}

