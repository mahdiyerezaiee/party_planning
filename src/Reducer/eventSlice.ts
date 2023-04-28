import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Event {
    id?: number;
    eventName: string;
    eventTime: string;
    eventDate: string;
    eventBudget: string;
    guestSizeType: number;
    occasionEventType: number;
    alcoholType: number;
    foodEventType: number;
    boardGameEventType: number;
    decoratorEventType: number;
    inviteEventType: number;
    todo: any
}

interface todoEdit {
    id: number;
    idTodo: number,
    active: boolean,
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

/**
 * Define a slice for managing the event state
 */
export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setEvent: (state, action: PayloadAction<Event>) => {
            const newItem = action.payload;
            state.id = state.id++
            state.itemsList.push({
                id: state.id++,
                eventName: newItem.eventName,
                eventTime: newItem.eventTime,
                eventDate: newItem.eventDate,
                eventBudget: newItem.eventBudget,
                foodEventType: newItem.foodEventType,
                guestSizeType: newItem.guestSizeType,
                occasionEventType: newItem.occasionEventType,
                alcoholType: newItem.alcoholType,
                boardGameEventType: newItem.boardGameEventType,
                decoratorEventType: newItem.decoratorEventType,
                inviteEventType: newItem.inviteEventType,
                todo: newItem.todo
            });

            /** Save state to local storage **/
            localStorage.setItem('EventState', JSON.stringify(state));
        },
        removePreviuseItem: (state, action: PayloadAction<number>) => {
            const removeItem = state.itemsList.filter((item: any, index: number) => item.id !== action.payload);
            state.itemsList = removeItem

            /** Save state to local storage **/
            localStorage.setItem('EventState', JSON.stringify(state));
        },
        changeActiveTodo: (state, action: PayloadAction<todoEdit>) => {
            const editItem = action.payload;
            const existingItem: any = state.itemsList.find((item: any) => item.id === editItem.id);
            const todo = existingItem.todo
            const todoList = todo.find((i: any) => i.id === editItem.idTodo)
            if (todoList) {
                todoList.active = editItem.active

            }
            /** Save state to local storage **/
            localStorage.setItem('EventState', JSON.stringify(state));
        },
    },
});

export const {setEvent, removePreviuseItem, changeActiveTodo} = eventSlice.actions;
