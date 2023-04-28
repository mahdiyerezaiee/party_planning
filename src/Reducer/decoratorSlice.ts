import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface DecoratorState {
    id: number,
    value: null | number,
}

let initialState: DecoratorState = {
    id: 0,
    value: null,
};

/** Load state from local storage **/
const storedState = localStorage.getItem('DecoratorState')
if (storedState) {
    initialState = JSON.parse(storedState)
}

/**
 *  Create a new slice of state for decorator
 */
export const decoratorSlice = createSlice({
    name: 'decorator',
    initialState,
    reducers: {
        /** Define a new reducer for selecting a decorator **/
        decoratorSelect: (state, action: PayloadAction<DecoratorState>) => {
            state.id = action.payload.id
            state.value = action.payload.value
            // Save state to local storage
            localStorage.setItem('DecoratorState', JSON.stringify(state))
        },
    },
})

export const {decoratorSelect} = decoratorSlice.actions
