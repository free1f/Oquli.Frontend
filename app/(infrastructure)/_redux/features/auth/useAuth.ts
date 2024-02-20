import { useCallback, useEffect, useState } from 'react'
import { useGetTokenQuery } from '@/app/(infrastructure)/_redux/services/auth.service'
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setUser } from "./authSlice"
import { type IUser } from "@/app/(domain)/_models/user.model"
import { PrivateRoutes, PublicRoutes } from '@/app/(infrastructure)/_routes'
import { retrieveLocalStorage, clearLocalStorage } from '@/app/(infrastructure)/_utils/localStorage'

interface IUseAuth {
	// token: IUser
	// isFetchingToken: boolean
	// loginError: any,
	// _handleLogin: () => void
	email: string
	_setUser: (email: string, password: string) => void
	logOut: () => void
}

const useAuth = (): IUseAuth => {
	const dispatch = useAppDispatch()

	const { email } = useAppSelector((state) => state.auth)
	const [shouldFetch, setShouldFetch] = useState(false)
	
	// TODO: Replace with refetch
// 	const {
// 		data: token = { token: '' } as IUser,
// 		isFetching: isFetchingToken,
// 		error: loginError,
// 		refetch,
// 	} = useGetTokenQuery({email, password}, {
// 		pollingInterval: 3600000
// 	})

// 	const _handleLogin = () => {
// 		refetch()
//   }
	
	// const _setUser = useCallback(
	// 	(username: string, password: string) => dispatch(setUser({ email, password })),
	// 	[dispatch, email],
	// );

	const logOut = () => {
		clearLocalStorage('user')
		if (window.location.pathname !== PublicRoutes.LOGIN)
			window.location.href = `${process.env.NEXT_PUBLIC_URL}/${PublicRoutes.LOGIN}`
	}

	const _setUser = (email: string, password: string) => {
		dispatch(setUser({ email, password }))
	}

	return {
		// token,
		// isFetchingToken,
		// loginError,
		logOut,
		_setUser,
		email
		// _handleLogin
	}
}

export default useAuth