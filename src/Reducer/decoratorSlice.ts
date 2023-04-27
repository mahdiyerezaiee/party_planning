import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface DecoratorState {
    id: number
}

let initialState: DecoratorState = {
    id: 0
};

/** Load state from local storage **/

const storedState = localStorage.getItem('DecoratorState')
if (storedState) {
    initialState = JSON.parse(storedState)
}
export const decoratorSlice = createSlice({
    name: 'decorator',
    initialState,
    reducers: {
        decoratorSelect: (state, action: PayloadAction<number>) => {
            state.id = action.payload
            // Save state to local storage
            localStorage.setItem('DecoratorState', JSON.stringify(state))
        },
    },
})

export const { decoratorSelect } = decoratorSlice.actions




