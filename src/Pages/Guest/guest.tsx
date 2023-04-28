import {useAppDispatch, useAppSelector} from "../../Hook/hook";
import {pagePreservative} from "../../Reducer/pageSlice";
import SelectGuestItem from "../../Components/Card/SelectGuest/selectGuestItem";
import HeaderList from "../../Components/Header/HeaderList/headerList";
import NextButton from "../../Components/Button/NexButton/nextButton";

/**
 * Initializing Guest to-do page event
 *
 * @constructor
 */
const Guest = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.guest)

    /** create a click event handler function **/
    const clickHandler = () => {
        dispatch(pagePreservative(4))
    }
    return(
        <div>
            <HeaderList now={20}/>
            <SelectGuestItem/>
            <NextButton handlerClick={()=>clickHandler()} statusDisabled={state.id ? false : true}/>
        </div>
    )
}
export default Guest