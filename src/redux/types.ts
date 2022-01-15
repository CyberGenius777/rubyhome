import { IProduct } from './../models/IProduct'

export interface IProductState {
  products: IProduct[]
  isLoading: boolean
  error: string
}
