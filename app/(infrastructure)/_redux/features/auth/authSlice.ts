import { createSlice } from '@reduxjs/toolkit'
import type { UserInfo } from '@/app/(domain)/_models/user.model'

// export const UserKey = 'user'
// const hasUser = localStorage.getItem(UserKey)

const initialState = {
	token: '',
	email: '',
	password: ''
}

// slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action): void => {
      state.email = action.payload.email
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