import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface InviteState {
    id: number
}

let initialState: InviteState = {
    id: 0
};

/** Load state from local storage **/

const storedState = localStorage.getItem('InviteState')
if (storedState) {
    initialState = JSON.parse(storedState)
}
export const inviteSlice = createSlice({
    name: 'invite',
    initialState,
    reducers: {
        inviteSelect: (state, action: PayloadAction<number>) => {
            state.id = action.payload
            // Save state to local storage
            localStorage.setItem('InviteState', JSON.stringify(state))
        },
    },
})

export const { inviteSelect } = inviteSlice.actions




