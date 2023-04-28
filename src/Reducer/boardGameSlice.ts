import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface BoardGameState {
    id: number,
    value: null | number,
}

let initialState: BoardGameState = {
    id: 0,
    value: null,
};

/** Load state from local storage **/

const storedState = localStorage.getItem('BoardGameState')
if (storedState) {
    initialState = JSON.parse(storedState)
}

/**
 * Define boardGameSlice
 */
export const boardGameSlice = createSlice({
    name: 'boardGame',
    initialState,
    reducers: {
        boardGameSelect: (state, action: PayloadAction<BoardGameState>) => {
            state.id = action.payload.id
            state.value = action.payload.value

            /** Save state to local storage **/
            localStorage.setItem('BoardGameState', JSON.stringify(state))
        },
    },
})

export const {boardGameSelect} = boardGameSlice.actions
