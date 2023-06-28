import { card } from "../types"

export async function useCategory(category: string) {
  const response = await (await fetch('https://fakestoreapi.com/products')).json()
        .then(json => json.filter((item: card) => item.category === category))
  return response
}


