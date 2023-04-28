import {useAppDispatch, useAppSelector} from "../../Hook/hook";
import {pagePreservative} from "../../Reducer/pageSlice";
import HeaderList from "../../Components/Header/HeaderList/headerList";
import DecoratorImg from "../../Assets/Img/Decorator.png";
import NextButton from "../../Components/Button/NexButton/nextButton";
import DecoratorItems from "../../Components/Card/Decorator/decoratorItem";
import {setTodo} from "../../Reducer/todoSlice";

/**
 * A functional component for rendering the decorators
 *
 * @constructor
 */
const Decorator = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.decorator)

    /** Handle click event of next button **/
    const clickHandler = () => {
        if (state.value !== 0){
            dispatch(setTodo({
                name:"Hire a decorator"
            }))
            dispatch(pagePreservative(9))

        }else {
            dispatch(pagePreservative(9))

        }
    }
    return(
        <div className="invite">
            <HeaderList now={80}/>
            <div className="invite-img">
                <img src={DecoratorImg}/>

            </div>
            <span>Do you wish to hire a decorator?</span>
            <DecoratorItems/>
            <NextButton handlerClick={()=>clickHandler()} statusDisabled={state.id ? false : true}/>
        </div>
    )

}
export default Decorator