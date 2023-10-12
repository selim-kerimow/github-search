import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface GithubState {
    favorites: string[]
}

const initialState: GithubState = {
    favorites: JSON.parse(localStorage.getItem('favorites') ?? '[]')
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavorites(state, action: PayloadAction<string>) {
            state.favorites.push(action.payload)
            localStorage.setItem('favorites', JSON.stringify(state.favorites))
        },
        removeFavorites(state, action: PayloadAction<string>) {
            state.favorites = state.favorites.filter(f => f !== action.payload)
            localStorage.setItem('favorites', JSON.stringify(state.favorites))
        }
    }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer