import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface FormState {
    nameEvent: string,
    Date: string,
    time: string,
    budget: number,
}

let initialState: FormState = {
    nameEvent: "",
    Date: "",
    time: "",
    budget: 0,

};

/** Load state from local storage **/

const storedState = localStorage.getItem('FormState')
if (storedState) {
    initialState = JSON.parse(storedState)
}

/**
 * Define a slice for managing the form state
 */
export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setForm: (state, action: PayloadAction<FormState>) => {
            state.nameEvent = action.payload.nameEvent
            state.Date = action.payload.Date
            state.time = action.payload.time
            state.budget = action.payload.budget

            /** Save state to local storage **/
            localStorage.setItem('FormState', JSON.stringify(state))
        },
    },
})

export const {setForm} = formSlice.actions
