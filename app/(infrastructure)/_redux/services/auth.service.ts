'use client'
import { apiService } from "./api.service"
import { getTokenAdapter, getTokenAdapterErrorResponse } from "@/app/(domain)/_adapters"
import { type IUser } from "@/app/(domain)/_models/user.model"
  
export const authApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    getToken: build.query<IUser, {email: string, password: string}>({
      query: (credentials) => {
				const token = btoa(`${credentials.email}:${credentials.password}`)
          return {
            url: '/auth',
						headers: {
							'Authorization': `Bearer ${token}`
						}
          };
        },
        transformResponse: (response: unknown): IUser => {
					console.log('response', response)
          return getTokenAdapter(response);
        },
				transformErrorResponse: (error: unknown) => {
					console.log('error', error)
					return getTokenAdapterErrorResponse(error)
				}
      }),
    }),
  });
  
export const { useGetTokenQuery } = authApi;
  