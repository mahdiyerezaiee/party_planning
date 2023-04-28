import {useAppDispatch, useAppSelector} from "../../Hook/hook";
import HeaderList from "../../Components/Header/HeaderList/headerList";
import BoardGameImg from "../../Assets/Img/BoardGame.png";
import NextButton from "../../Components/Button/NexButton/nextButton";
import BoardGameItem from "../../Components/Card/BoardGame/boardGameItem";
import {AddEventToDo} from "../../Utils/addEventToDo";
import {setTodo} from "../../Reducer/todoSlice";
import {useEffect, useState} from "react";

/**
 * Initializing BoardGame to-do page event
 *
 * @constructor
 */
const BoardGame = () => {

    const state = useAppSelector(state => state)
    const [states, setState] = useState<any>([])

    /** se the useEffect hook to update local state when global state changes **/
    useEffect(() => {
        setState(state)
    }, [state])

    const dispatch = useAppDispatch()
    const gameState = state.boradGame

    /** Define a click handler function that will dispatch actions and call a utility function **/
    const clickHandler = () => {
        if (gameState && gameState.value !== 0) {
            dispatch(setTodo({
                name: "Rent Board Games"
            }))
        }
        AddEventToDo(dispatch, states)

    }

    return (
        <div className="invite">
            <HeaderList now={100}/>
            <div className="invite-img">
                <img src={BoardGameImg}/>

            </div>
            <span>Do you plan to rent board games?</span>
            <BoardGameItem/>
            <NextButton handlerClick={() => clickHandler()} statusDisabled={gameState.id ? false : true}/>
        </div>
    )

}
export default BoardGame
