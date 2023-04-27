import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PageState {
    page: number
}



let initialState: PageState = {
    page: 1
};

const storedState = localStorage.getItem('pageState')
if (storedState) {
    initialState = JSON.parse(storedState)
}
export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        pagePreservative: (state, action: PayloadAction<number>) => {
            state.page = action.payload
            // Save state to local storage
            localStorage.setItem('pageState', JSON.stringify(state))
        },
    },
})

export const { pagePreservative } = pageSlice.actions


