import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PreviuseEvent {
    id?: number;
    eventName:string;
    eventTime:string;
    eventDate:string;
    eventBudget:string;
    guestSizeType: number;
    occasionEventType: number;
    alcoholType: number;
    foodEventType: number;
    boardGameEventType: number;
    decoratorEventType: number;
    inviteEventType: number;
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

export const previuseEventSlice = createSlice({
    name: 'previuseEvent',
    initialState,
    reducers: {
        setPreviuseEvent: (state, action: PayloadAction<PreviuseEvent>) => {
            const newItem = action.payload;
            if (!state.itemsList.find(obj => obj.id === newItem.id)){
                state.itemsList.push({
                    id: newItem.id,
                    eventName: newItem.eventName,
                    eventTime:newItem.eventTime,
                    eventDate:newItem.eventDate,
                    eventBudget:newItem.eventBudget,
                    foodEventType: newItem.foodEventType,
                    guestSizeType: newItem.guestSizeType,
                    occasionEventType: newItem.occasionEventType,
                    alcoholType: newItem.alcoholType,
                    boardGameEventType: newItem.boardGameEventType,
                    decoratorEventType: newItem.decoratorEventType,
                    inviteEventType: newItem.inviteEventType,
                });
            }


            // Save state to local storage
            localStorage.setItem('PreviuseEventState', JSON.stringify(state));
        },
    },
});

export const { setPreviuseEvent } = previuseEventSlice.actions;
