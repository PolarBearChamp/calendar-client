import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SignupSchema } from '../types/signupSchema'

const initialState: SignupSchema = {
  email: '',
  username: '',
  password: '',
}

export const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
})

export const { actions: signupActions } = signupSlice
export const { reducer: signupReducer } = signupSlice
