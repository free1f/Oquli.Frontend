"use client"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: () => ({}),
})