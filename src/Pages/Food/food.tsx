import {useAppDispatch, useAppSelector} from "../../Hook/hook";
import {pagePreservative} from "../../Reducer/pageSlice";
import HeaderList from "../../Components/Header/HeaderList/headerList";
import foodImg from "../../Assets/Img/Food.png";

import NextButton from "../../Components/Button/NexButton/nextButton";
import FoodItem from "../../Components/Card/Food/foodItem";

const Food = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.food)
    const clickHandler = () => {
        dispatch(pagePreservative(7))
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