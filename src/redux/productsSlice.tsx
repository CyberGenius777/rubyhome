import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductState } from './types'
import { IProduct } from './../models/IProduct'

const initialState: IProductState = {
  products: [],
  isLoading: false,
  error: '',
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts(state, action: PayloadAction<IProduct>) {},
  },
})

export default productsSlice.reducer
