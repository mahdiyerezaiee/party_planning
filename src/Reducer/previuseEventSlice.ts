import {createSlice, PayloadAction} from '@reduxjs/toolkit'
interface Todo {
    id?: number,
    active?: boolean,
    name: string,
}
interface PreviuseEvent {
    id?: number;
    eventName?: string;
    eventTime?: string;
    eventDate?: string;
    eventBudget?: string;
    occasionEventType?: number;

    todo?:Todo[] | undefined
}

interface PreviuseEventState {
    itemsList: PreviuseEvent[];
}

let initialState: PreviuseEventState = {
    itemsList: [],
};

/** Load state from local storage **/

const storedState = localStorage.getItem('PreviuseEventState');
if (storedState) {
    initialState = JSON.parse(storedState);
}

/**
 * Define a slice for managing the previuseEvent state
 */
export const previuseEventSlice = createSlice({
    name: 'previuseEvent',
    initialState,
    reducers: {
        setPreviuseEvent: (state, action: PayloadAction<PreviuseEvent>) => {
            const newItem = action.payload;
            if (!state.itemsList.find(obj => obj.id === newItem.id)) {
                state.itemsList.push({
                    id: newItem.id,
                    eventName: newItem.eventName,
                    eventTime: newItem.eventTime,
                    eventDate: newItem.eventDate,
                    eventBudget: newItem.eventBudget,

                    occasionEventType: newItem.occasionEventType,

                    todo: newItem.todo
                });
            }

            /** Save state to local storage **/
            localStorage.setItem('PreviuseEventState', JSON.stringify(state));
        },
    },
});

export const {setPreviuseEvent} = previuseEventSlice.actions;
