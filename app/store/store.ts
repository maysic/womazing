import { create } from 'zustand'
import { card } from '../types'




interface BearState {
  bags: card[]
  addProduct: (product: card) => void
  removeProduct: (id: number) => void
}

const useStore = create<BearState>()((set) => ({
  bags: [],
  addProduct: (product) => set((state) => ({ bags: [...state.bags, product] })),
  removeProduct: (id) =>
    set((state) => ({
      bags: state.bags.filter((product) => product.id !== id),
    })),
}))

export default useStore