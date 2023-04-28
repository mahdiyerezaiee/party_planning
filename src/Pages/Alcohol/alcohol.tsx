import {useAppDispatch, useAppSelector} from "../../Hook/hook";
import {pagePreservative} from "../../Reducer/pageSlice";
import HeaderList from "../../Components/Header/HeaderList/headerList";
import AlcoholImg from "../../Assets/Img/Alcohol.png";
import NextButton from "../../Components/Button/NexButton/nextButton";
import AlcoholItems from "../../Components/Card/Alcohol/alcoholItem";
import {setTodo} from "../../Reducer/eventSlice";

/**
 * Initializing Alcohol to-do page event
 *
 * @constructor
 */
const Alcohol = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.alcohol)
    const stateEvent=useAppSelector(state => state.event)

    const clickHandler = () => {
        if (state.value !== 0){
            dispatch(setTodo(
                {
                    id: stateEvent.id - 1,

                    name:"alcohol"
            }
            ))
            dispatch(pagePreservative(8))

        }else {
            dispatch(pagePreservative(8))

        }
    }
    return(
        <div className="invite">
            <HeaderList now={60}/>
            <div className="invite-img">
                <img src={AlcoholImg}/>

            </div>
            <span>Will there be alcohol?</span>
            <AlcoholItems/>
            <NextButton handlerClick={()=>clickHandler()} statusDisabled={state.id ? false : true}/>
        </div>
    )


}
export default Alcohol
