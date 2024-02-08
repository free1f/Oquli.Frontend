"use client";
import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "../services/api.service";
import { setupListeners } from "@reduxjs/toolkit/query";
import countSlice from "../features/count/countSlice";

export const store = configureStore({
  reducer: {
    count: countSlice,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});
setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the app itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
