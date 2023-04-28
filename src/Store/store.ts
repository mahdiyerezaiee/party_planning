import {configureStore} from '@reduxjs/toolkit'
import {pageSlice} from "../Reducer/pageSlice";
import {occasionSlice} from "../Reducer/occasionSlice";
import {guestSlice} from "../Reducer/guestSlice";
import {formSlice} from "../Reducer/formSlice";
import {inviteSlice} from "../Reducer/inviteSlice";
import {foodSlice} from "../Reducer/foodSlice";
import {alcoholSlice} from "../Reducer/alcoholSlice";
import {decoratorSlice} from "../Reducer/decoratorSlice";
import {boardGameSlice} from "../Reducer/boardGameSlice";
import {eventSlice} from "../Reducer/eventSlice";
import {previuseEventSlice} from "../Reducer/previuseEventSlice";
import {todoSlice} from "../Reducer/todoSlice";
import {eventIdSlice} from "../Reducer/eventIdSlice";

export const store = configureStore({
    reducer: {

        page: pageSlice.reducer,
        occasion: occasionSlice.reducer,
        guest: guestSlice.reducer,
        form: formSlice.reducer,
        invite: inviteSlice.reducer,
        food: foodSlice.reducer,
        alcohol: alcoholSlice.reducer,
        decorator: decoratorSlice.reducer,
        boardGame: boardGameSlice.reducer,
        todo: todoSlice.reducer,
        event: eventSlice.reducer,
        previuseEvent: previuseEventSlice.reducer,
        eventId: eventIdSlice.reducer

    },
})

/** Infer the `RootState` and `AppDispatch` types from the store itself **/
export type RootState = ReturnType<typeof store.getState>
/** Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState} **/
export type AppDispatch = typeof store.dispatch
