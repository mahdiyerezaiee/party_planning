import {useAppDispatch, useAppSelector} from "../../Hook/hook";
import {pagePreservative} from "../../Reducer/pageSlice";
import HeaderList from "../../Components/Header/HeaderList/headerList";
import foodImg from "../../Assets/Img/Food.png";

import NextButton from "../../Components/Button/NexButton/nextButton";
import FoodItem from "../../Components/Card/Food/foodItem";
import {setTodo} from "../../Reducer/todoSlice";

/**
 * Initializing Food to-do page event
 *
 * @constructor
 */
const Food = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.food)

    /** Click handler function for the next button **/
    const clickHandler = () => {
        if (state.value !== 0){
            dispatch(setTodo({
                name:"Order food"
            }))
            dispatch(pagePreservative(7))

        }else {
            dispatch(pagePreservative(7))

        }
    }
    return(
        <div className="invite">
            <HeaderList now={50}/>
            <div className="invite-img">
                <img src={foodImg}/>

            </div>
            <span>What will be the food arrangements?</span>
            <FoodItem/>
            <NextButton handlerClick={()=>clickHandler()} statusDisabled={state.id ? false : true}/>
        </div>
    )

}
export default Food