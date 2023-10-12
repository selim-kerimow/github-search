import { configureStore, getType } from "@reduxjs/toolkit";
import { githubApi } from "./api/github.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { githubReducer } from "./slices/github.sllice";


export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        githubSlice: githubReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware)
})

setupListeners(store.dispatch)  // for refetchOnFocus

export type RootState = ReturnType<typeof store.getState>