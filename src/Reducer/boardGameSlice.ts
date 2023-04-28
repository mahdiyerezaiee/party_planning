import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface BoradGameState {
    id: number,
    value:null | number,
}

let initialState: BoradGameState = {
    id: 0,
    value:null,
};

/** Load state from local storage **/

const storedState = localStorage.getItem('BoradGameState')
if (storedState) {
    initialState = JSON.parse(storedState)
}
export const boradGameSlice = createSlice({
    name: 'boradGame',
    initialState,
    reducers: {
        boradGameSelect: (state, action: PayloadAction<BoradGameState>) => {
            state.id = action.payload.id
            state.value = action.payload.value

            // Save state to local storage
            localStorage.setItem('BoradGameState', JSON.stringify(state))
        },
    },
})

export const { boradGameSelect } = boradGameSlice.actions




