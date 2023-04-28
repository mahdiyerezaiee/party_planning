import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FoodState {
    id: number,
    value: null | number
}

let initialState: FoodState = {
    id: 0,
    value: null
};

/** Load state from local storage **/

const storedState = localStorage.getItem('FoodState')
if (storedState) {
    initialState = JSON.parse(storedState)
}
export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        foodSelect: (state, action: PayloadAction<FoodState>) => {
            state.id = action.payload.id
            state.value = action.payload.value
            // Save state to local storage
            localStorage.setItem('FoodState', JSON.stringify(state))
        },
    },
})

export const { foodSelect } = foodSlice.actions




