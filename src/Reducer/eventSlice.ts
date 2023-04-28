import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Todo {
    id?: number,
    active?: boolean,
    name: string,
}

interface Event {
    id?: number;
    eventName?: string;
    eventTime?: string;
    eventDate?: string;
    eventBudget?: string;
    occasionEventType?: number;

    todo?: Todo[] | undefined

}


interface todoEdit {
    id: number;
    idTodo: number,
    active: boolean,
}

interface addTodo {
    id: number;
    name: string

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
        setEvent: (state, action: PayloadAction) => {
            state.id = state.id++
            state.itemsList.push({
                id: state.id++,
                todo: []
            });

            /** Save state to local storage **/
            localStorage.setItem('EventState', JSON.stringify(state));
        },
        setOccasion: (state, action: PayloadAction<any>) => {
            const newItem = action.payload;
            const existingItem: any = state.itemsList.find((item: any) => item.id === newItem.id);
            if (existingItem) {
                existingItem.occasionEventType = action.payload.occasionEventType
            }
            /** Save state to local storage **/
            localStorage.setItem('EventState', JSON.stringify(state));

        },
        setForm: (state, action: PayloadAction<any>) => {
            const newItem = action.payload;
            const existingItem: any = state.itemsList.find((item: any) => item.id === newItem.id);
            if (existingItem) {
                existingItem.eventName = action.payload.eventName;
                existingItem.eventTime = action.payload.eventTime;
                existingItem.eventDate = action.payload.eventDate;
                existingItem.eventBudget = action.payload.eventBudget;
            }
            /** Save state to local storage **/
            localStorage.setItem('EventState', JSON.stringify(state));

        },

        setTodo: (state, action: PayloadAction<addTodo>) => {
            const newItem = action.payload;
            const existingItem: any = state.itemsList.find((item: any) => item.id === newItem.id);
            existingItem.todo.push({

                id: new Date().getUTCMilliseconds(),
                active: false,
                name: newItem.name,

            });
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
        removePreviuseItem: (state, action: PayloadAction<number>) => {
            const removeItem = state.itemsList.filter((item: any, index: number) => item.id !== action.payload);
            state.itemsList = removeItem

            /** Save state to local storage **/
            localStorage.setItem('EventState', JSON.stringify(state));
        },
    },
});

export const {setEvent, setForm, setOccasion, removePreviuseItem, changeActiveTodo, setTodo} = eventSlice.actions;
