'use client'
import { apiService } from "./api.service"
import { getTokenAdapter } from "@/app/(domain)/_adapters"
import { type IUser } from "@/app/(domain)/_models/user.model"
  
export const authApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    getToken: build.query<IUser, {username: string, password: string}>({
      query: (credentials) => {
					const token = btoa(`${credentials.username}:${credentials.password}`)
          return {
            url: '/auth',
						headers: {
							'Authorization': `Bearer ${token}`
						}
          };
        },
        transformResponse: (response: unknown): IUser => {
          return getTokenAdapter(response);
        },
      }),
    }),
  });
  
export const { useGetTokenQuery } = authApi;
  