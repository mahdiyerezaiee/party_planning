import {useAppDispatch, useAppSelector} from "../../Hook/hook";
import HeaderList from "../../Components/Header/HeaderList/headerList";
import BoardGameImg from "../../Assets/Img/BoardGame.png";
import NextButton from "../../Components/Button/NexButton/nextButton";
import BoardGameItem from "../../Components/Card/BoardGame/boardGameItem";
import {setTodo} from "../../Reducer/eventSlice";
import {useEffect, useState} from "react";
import {pagePreservative} from "../../Reducer/pageSlice";
import {AddEventToDo} from "../../Utils/addEventToDo";

/**
 * Initializing BoardGame to-do page event
 *
 * @constructor
 */
const BoardGame = () => {

    const state = useAppSelector(state => state)
    const stateEvent = useAppSelector(state => state.event)

    const dispatch = useAppDispatch()
    const gameState = state.boardGame

    /** Define a click handler function that will dispatch actions and call a utility function **/
    const clickHandler = () => {
        if (gameState && gameState.value !== 0) {
            dispatch(setTodo({
                id: stateEvent.id - 1,
                name: "Rent Board Games"
            }))
        }
        AddEventToDo(dispatch)

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
