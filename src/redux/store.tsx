import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import authReducer from './authSlice'

const rootReducer = combineReducers({
  productsReducer,
  authReducer,
})

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
