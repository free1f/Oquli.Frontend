import { useCallback, useEffect, useState } from 'react'
import { useGetTokenQuery } from '@/app/(infrastructure)/_redux/services/auth.service'
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setUser } from "./authSlice"
import { type IUser } from "@/app/(domain)/_models/user.model"

interface IUseAuth {
	token: IUser
	isFetchingToken: boolean
	loginError: any,
	_setUser: (email: string, password: string) => void
	_handleLogin: () => void
}

const useAuth = (): IUseAuth => {
	const dispatch = useAppDispatch()

	const { email, password } = useAppSelector((state) => state.auth)
	const [shouldFetch, setShouldFetch] = useState(false)
	
	// TODO: Replace with refetch
	const {
		data: token = { token: '' } as IUser,
		isFetching: isFetchingToken,
		error: loginError,
		refetch,
	} = useGetTokenQuery({email, password}, {
		pollingInterval: 3600000
	})

	const _handleLogin = () => {
		refetch()
  }
	
	const _setUser = useCallback(
		(username: string, password: string) => dispatch(setUser({ email, password })),
		[dispatch],
	);

	return {
		token,
		isFetchingToken,
		loginError,
		_setUser,
		_handleLogin
	}
}

export default useAuth