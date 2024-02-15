import { createSlice } from '@reduxjs/toolkit'
import type { UserInfo } from '@/app/(domain)/_models/user.model'

export const UserKey = 'user'
const hasUser = localStorage.getItem(UserKey)

const initialState = {
	token: '',
	username: '',
	password: ''
}

// slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action): void => {
      state.username = action.payload.username
			state.password = action.payload.password
    },
		setToken: (state, action): void => {
			state.token = action.payload.token
		},
    resetUser: () => {
      return initialState
    }
  },
  extraReducers: () => {}
})

export const { setUser, resetUser } = authSlice.actions

export default authSlice.reducer