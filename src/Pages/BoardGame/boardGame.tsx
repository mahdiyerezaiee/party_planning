import {useAppDispatch, useAppSelector} from "../../Hook/hook";
import HeaderList from "../../Components/Header/HeaderList/headerList";
import BoardGameImg from "../../Assets/Img/BoardGame.png";
import NextButton from "../../Components/Button/NexButton/nextButton";
import BoardGameItem from "../../Components/Card/BoardGame/boardGameItem";
import {AddEventToDo} from "../../Utils/addEventToDo";

const BoardGame = () => {

    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state)
    const {id} =state.boradGame
    return(
        <div className="invite">
            <HeaderList now={100}/>
            <div className="invite-img">
                <img src={BoardGameImg}/>

            </div>
            <span>Do you plan to rent board games?</span>
            <BoardGameItem/>
            <NextButton handlerClick={()=>AddEventToDo(dispatch,state)} statusDisabled={id ? false : true}/>
        </div>
    )

}
export default BoardGame