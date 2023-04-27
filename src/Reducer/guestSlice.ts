import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface GuestState {
    id: number
}

let initialState: GuestState = {
    id: 0
};

/** Load state from local storage **/

const storedState = localStorage.getItem('GuestState')
if (storedState) {
    initialState = JSON.parse(storedState)
}
export const guestSlice = createSlice({
    name: 'guest',
    initialState,
    reducers: {
        guestSelect: (state, action: PayloadAction<number>) => {
            state.id = action.payload
            // Save state to local storage
            localStorage.setItem('GuestState', JSON.stringify(state))
        },
    },
})

export const { guestSelect } = guestSlice.actions




