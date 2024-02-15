import { useCallback } from 'react'
import { useGetTokenQuery } from '@/app/(infrastructure)/_redux/services/auth.service'
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setUser } from "./authSlice"
import { type IUser } from "@/app/(domain)/_models/user.model"

interface IUseAuth {
	token: IUser
	isFetchingToken: boolean
	_setUser: (username: string, password: string) => void
	_handleLogin: () => void
}

const useAuth = (): IUseAuth => {
	const dispatch = useAppDispatch()

	const { username, password } = useAppSelector((state) => state.auth)

	const {
		data: token = { token: '' } as IUser,
		isFetching: isFetchingToken,
		refetch
	} = useGetTokenQuery({username, password }, {
		// skip: true
	})

	const _handleLogin = () => {
    refetch()
  }
	
	const _setUser = useCallback(
		(username: string, password: string) => dispatch(setUser({ username, password })),
		[dispatch],
	);

	return {
		token,
		isFetchingToken,
		_setUser,
		_handleLogin
	}
}

export default useAuth