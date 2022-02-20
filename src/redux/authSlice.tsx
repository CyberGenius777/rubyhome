import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuth } from './types'

const initialState: IAuth = {
  auth: false,
  name: null,
  email: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IAuth>) {
      state.auth = true
      state.name = action.payload.name
      state.email = action.payload.email
    },
    logout(state) {
      state.auth = false
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
