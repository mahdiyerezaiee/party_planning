import {useAppDispatch, useAppSelector} from "../../Hook/hook";
import {pagePreservative} from "../../Reducer/pageSlice";
import HeaderList from "../../Components/Header/HeaderList/headerList";
import BoardGameImg from "../../Assets/Img/BoardGame.png";
import NextButton from "../../Components/Button/NexButton/nextButton";
import DecoratorItems from "../../Components/Card/Decorator/decoratorItem";
import BoardGameItem from "../../Components/Card/BoardGame/boardGameItem";

const BoardGame = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.boradGame)
    const clickHandler = () => {
        dispatch(pagePreservative(10))
    }
    return(
        <div className="invite">
            <HeaderList now={100}/>
            <div className="invite-img">
                <img src={BoardGameImg}/>

            </div>
            <span>Do you plan to rent board games?</span>
            <BoardGameItem/>
            <NextButton handlerClick={()=>clickHandler()} statusDisabled={state.id ? false : true}/>
        </div>
    )

}
export default BoardGame