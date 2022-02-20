import { IProduct } from './../models/IProduct'

export interface IProductState {
  products: IProduct[]
  isLoading: boolean
  error: string
}

export interface IAuth {
  auth: boolean
  name: string | null
  email: string | null
}
