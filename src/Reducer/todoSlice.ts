import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Todo {
    id?: number,
    active?: boolean,
    name: string,
}

interface TodoState {
    itemsList: Todo[];
}

let initialState: TodoState = {
    itemsList: [],
};

/** Load state from local storage **/
const storedState = localStorage.getItem('TodoState');
if (storedState) {
    initialState = JSON.parse(storedState);
}

/**
 * Define a slice for managing the to-do state
 */
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodo: (state, action: PayloadAction<Todo>) => {
            const newItem = action.payload;
            state.itemsList.push({

                id: new Date().getUTCMilliseconds(),
                active: false,
                name: newItem.name,

            });
            /** Save state to local storage **/
            localStorage.setItem('TodoState', JSON.stringify(state));
        },
    },
});

export const {setTodo} = todoSlice.actions;
