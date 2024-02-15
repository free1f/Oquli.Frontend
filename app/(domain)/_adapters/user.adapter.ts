import type { IUser } from '../_models/user.model'

export const getTokenAdapter = (token: any): IUser => {
  return {
    token
  }
}