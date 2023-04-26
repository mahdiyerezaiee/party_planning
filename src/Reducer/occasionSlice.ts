import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../Store/store';

interface OccasinState {
    id: number
}



let initialState: OccasinState = {
    id: 0
};

/** Load state from local storage **/

const storedState = localStorage.getItem('OccasinState')
if (storedState) {
    initialState = JSON.parse(storedState)
}
export const occasionSlice = createSlice({
    name: 'occasion',
    initialState,
    reducers: {
        occasionSelect: (state, action: PayloadAction<number>) => {
            state.id = action.payload
            // Save state to local storage
            localStorage.setItem('OccasinState', JSON.stringify(state))
        },
    },
})

export const { occasionSelect } = occasionSlice.actions

export default occasionSlice.reducer
