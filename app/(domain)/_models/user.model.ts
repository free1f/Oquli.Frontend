export interface IUser {
  token: string | null
}

export interface UserInfo {
	user: IUser
	loading: boolean
	error: string | null
}