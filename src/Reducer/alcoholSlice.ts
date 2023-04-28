import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface AlcoholState {
    id: number,
    value: any | number,
}

/**
 * Define the initial state of the alcohol slice
 */
let initialState: AlcoholState = {
    id: 0,
    value: null,
};

/**
 * Load state from local storage
 */
const storedState = localStorage.getItem('AlcoholState')
if (storedState) {
    initialState = JSON.parse(storedState)
}

/**
 * Create the alcohol slice using the createSlice function from Redux Toolkit.
 */
export const alcoholSlice = createSlice({
    name: 'alcohol',
    initialState,
    reducers: {
        alcoholSelect: (state, action: PayloadAction<AlcoholState>) => {
            state.id = action.payload.id
            state.value = action.payload.value

            /** Save state to local storage **/
            localStorage.setItem('AlcoholState', JSON.stringify(state))
        },
    },
})

export const {alcoholSelect} = alcoholSlice.actions
