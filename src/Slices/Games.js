import { createSlice } from "@reduxjs/toolkit";
import { normalize } from 'normalizr'

const initialState = {
    gameIds: [],
    page: 1
}

const gamesSlise = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        increasePage: (state) => {
            state.page = state.page + 1
        },
        setGames: (state, action) => {
            const {entities, result} = normalize(action.payload)
        }
    }
})