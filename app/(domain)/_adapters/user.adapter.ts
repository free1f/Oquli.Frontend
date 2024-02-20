import type { IUser } from '../_models/user.model'

export const getTokenAdapter = (token: any): IUser => {
  return {
    token
  }
}

export const getTokenAdapterErrorResponse = (response: any) => {
  return {
    data: response.data,
    status: response.status,
    message: 'An error occurred. Please try again later or contact with support.'
  }
}