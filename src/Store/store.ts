import { configureStore } from '@reduxjs/toolkit'
import {pageSlice} from "../Reducer/pageSlice";
import {occasionSlice} from "../Reducer/occasionSlice";
import {guestSlice} from "../Reducer/guestSlice";
import {formSlice} from "../Reducer/formSlice";
import {inviteSlice} from "../Reducer/inviteSlice";
import {foodSlice} from "../Reducer/foodSlice";
import {alcoholSlice} from "../Reducer/alcoholSlice";
import {decoratorSlice} from "../Reducer/decoratorSlice";
import {boradGameSlice} from "../Reducer/boardGameSlice";

export const store = configureStore({
    reducer: {

    page: pageSlice.reducer,
    occasion:occasionSlice.reducer,
    guest: guestSlice.reducer,
    form:formSlice.reducer,
    invite:inviteSlice.reducer,
    food:foodSlice.reducer,
    alcohol:alcoholSlice.reducer,
    decorator:decoratorSlice.reducer,
    boradGame:boradGameSlice.reducer
    },
})

/** Infer the `RootState` and `AppDispatch` types from the store itself **/
export type RootState = ReturnType<typeof store.getState>
/** Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState} **/
export type AppDispatch = typeof store.dispatch