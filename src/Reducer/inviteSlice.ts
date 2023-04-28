import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface InviteState {
    id: number,
    value : null | number
}

let initialState: InviteState = {
    id: 0,
    value : null
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
        inviteSelect: (state, action: PayloadAction<InviteState>) => {
            state.id = action.payload.id
            state.value = action.payload.value
            // Save state to local storage
            localStorage.setItem('InviteState', JSON.stringify(state))
        },
    },
})

export const { inviteSelect } = inviteSlice.actions




