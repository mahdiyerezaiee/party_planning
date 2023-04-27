import {setEvent} from "../Reducer/eventSlice";
import {pagePreservative} from "../Reducer/pageSlice";

export const AddEventToDo = (dispatch:any ,state:any ) => {
  const formState =  state.form

  const guestState = state.guest
  const boardGameState = state.boradGame
  const occasionState =  state.occasion
  const alcoholState =  state.alcohol
  const foodState =  state.food
  const inviteState = state.invite
  const decoratorState = state.decorator
  dispatch(setEvent({
      eventName:formState.nameEvent,
      eventDate:formState.Date,
      eventBudget:formState.budget,
      eventTime:formState.time,
  foodEventType:foodState.id,
  guestSizeType:guestState.id,
  occasionEventType:occasionState.id,
  alcoholType: alcoholState.id,
  boardGameEventType:boardGameState.id,
  decoratorEventType: decoratorState.id,
  inviteEventType: inviteState.id,
  }))
    window.location.reload()

 localStorage.removeItem("AlcoholState")
 localStorage.removeItem("BoradGameState")
 localStorage.removeItem("DecoratorState")
 localStorage.removeItem("FoodState")
 localStorage.removeItem("FormState")
 localStorage.removeItem("GuestState")
 localStorage.removeItem("InviteState")
 localStorage.removeItem("OccasinState")

  dispatch(pagePreservative(1))
}