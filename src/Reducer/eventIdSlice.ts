import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface EventIdState {
    id: number,
}

let initialState: EventIdState = {
    id: 0,
};

/** Load state from local storage **/
const storedState = localStorage.getItem('EventIdState')
if (storedState) {
    initialState = JSON.parse(storedState)
}
export const eventIdSlice = createSlice({
    name: 'eventId',
    initialState,
    reducers: {
        /** Reducer function to set the selected event ID **/
        idEventSelect: (state, action: PayloadAction<number>) => {
            state.id = action.payload

            /** Save state to local storage **/
            localStorage.setItem('EventIdState', JSON.stringify(state))
        },
    },
})

export const {idEventSelect} = eventIdSlice.actions
