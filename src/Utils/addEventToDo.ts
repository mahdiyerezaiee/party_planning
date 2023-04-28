import {setEvent} from "../Reducer/eventSlice";
import {pagePreservative} from "../Reducer/pageSlice";
import {setTodo} from "../Reducer/todoSlice";

export const AddEventToDo = (dispatch: any, state: any) => {
    const formState = state.form
    const guestState = state.guest
    const boardGameState = state.boardGame
    const occasionState = state.occasion
    const alcoholState = state.alcohol
    const foodState = state.food
    const inviteState = state.invite
    const decoratorState = state.decorator
    if (boardGameState && boardGameState.value !== 0){
        dispatch(setTodo({
            name:"Rent Board Games"
        }))
    }
    const todoState = state.todo

    dispatch(setEvent({
        eventName: formState.nameEvent,
        eventDate: formState.Date,
        eventBudget: formState.budget,
        eventTime: formState.time,
        foodEventType: foodState.id,
        guestSizeType: guestState.id,
        occasionEventType: occasionState.id,
        alcoholType: alcoholState.id,
        boardGameEventType: boardGameState.id,
        decoratorEventType: decoratorState.id,
        inviteEventType: inviteState.id,
        todo: todoState.itemsList
    }))
    window.location.reload()

    localStorage.removeItem("AlcoholState")
    localStorage.removeItem("BoardGameState")
    localStorage.removeItem("DecoratorState")
    localStorage.removeItem("FoodState")
    localStorage.removeItem("FormState")
    localStorage.removeItem("GuestState")
    localStorage.removeItem("InviteState")
    localStorage.removeItem("OccasinState")
    localStorage.removeItem("TodoState")


    dispatch(pagePreservative(1))
}