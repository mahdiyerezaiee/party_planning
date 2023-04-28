import {pagePreservative} from "../Reducer/pageSlice";

export const AddEventToDo = (dispatch: any) => {

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