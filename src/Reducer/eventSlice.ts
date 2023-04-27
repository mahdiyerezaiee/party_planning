import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Event {
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
    createDate?:string
}

interface EventState {
    itemsList: Event[];
    id: number;
}

let initialState: EventState = {
    itemsList: [],
    id: 1,
};

/** Load state from local storage **/

const storedState = localStorage.getItem('EventState');
if (storedState) {
    initialState = JSON.parse(storedState);
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setEvent: (state, action: PayloadAction<Event>) => {
            const newItem = action.payload;
            state.id = state.id ++
            state.itemsList.push({
                id: state.id ++,
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
                createDate:new Date().toLocaleDateString("en-US")
            });

            // Save state to local storage
            localStorage.setItem('EventState', JSON.stringify(state));
        },
        removePreviuseItem: (state, action: PayloadAction<number>) => {
            const removeItem = state.itemsList.filter((item :any, index:number)=> item.id !== action.payload);
            state.itemsList = removeItem

            // Save state to local storage
            localStorage.setItem('EventState', JSON.stringify(state));
        },
    },
});

export const { setEvent, removePreviuseItem } = eventSlice.actions;
