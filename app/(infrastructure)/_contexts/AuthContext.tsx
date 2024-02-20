import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react'
import { retrieveLocalStorage, clearLocalStorage } from '@/app/(infrastructure)/_utils/localStorage'
import { PrivateRoutes, PublicRoutes } from '@/app/(infrastructure)/_routes'

export const { Provider, Consumer } = createContext({});

type AuthProviderProps = { children: ReactNode }

export const AuthContext = createContext<
	{
		user: string
		isValidUser: boolean
	}
	| null
>(null)

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState('')
	const [isValidUser, setIsValidUser] = useState(false)
	
	useEffect(() => {
		const user = retrieveLocalStorage('user')
		if (user) {
			setUser(user.email)
			setIsValidUser(true)
		} else {
			setIsValidUser(false)
			clearLocalStorage('user')
			if (window.location.pathname !== PublicRoutes.LOGIN)
				window.location.href = `${process.env.NEXT_PUBLIC_URL}/${PublicRoutes.LOGIN}`
		}
	}, [])

	const value = {
		user,
		isValidUser
	}
	
	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	)
}

export const useAuthContext = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuthContext must be used within an AuthProvider')
	}
	return context
}