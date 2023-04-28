import ButtonCreateNewEvent from "../../Button/ButtonCreateNewEvent/buttonCreateNewEvent";
import "./style.scss"
import img from "../../../Assets/Img/createNewEvent.png"
import imgSaly from "../../../Assets/Img/saly.png"
import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {pagePreservative} from "../../../Reducer/pageSlice";
import {Fragment} from "react";
import {NameOccasin} from "../../../Utils/occasionType";
import ButtonCreateNew from "../../Button/ButtonCreateNew/buttonCreateNew";
import {idEventSelect} from "../../../Reducer/eventIdSlice";
import {setEvent} from "../../../Reducer/eventSlice";

const CardCreateNewEvent = () => {

    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.event)

    const clickHandler = () => {
        dispatch(pagePreservative(2))
        dispatch(setEvent())
    }
    const clickHandlerToDo = (id: number) => {
        dispatch(idEventSelect(id))
        dispatch(pagePreservative(10))
    }

    if (state.itemsList.length !== 0  ) {
        return (
            <Fragment>
                <div className="row pb-3">
                    <div className="textUp float-end col-6"><h3>Upcoming </h3></div>
                    <div className="NewButton col-6"><ButtonCreateNew handlerClick={() => clickHandler()}/></div>
                </div>

                {state.itemsList.filter((i: any) => i.eventName  ).map((item: any) =>
                    <div key={item.id} onClick={() => clickHandlerToDo(item.id)} className=" row CardCreateNewEvent">
                        <div className="col-8">
                            <span>{item.eventName}`s {NameOccasin(item.occasionEventType)}</span>
                            <p>{Math.ceil(Math.abs(new Date(item.eventDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} Days
                                to go</p>
                            <div className="row">
                                <span
                                    className="col-6 float-start">{item.todo && item.todo.filter((i: any) => i.active === true).length}</span>
                                <span
                                    className=" col-6    ">{item.todo && item.todo.length - item.todo.filter((i: any) => i.active === true).length}</span>
                            </div>
                            <div className="row pt-1 ">
                                <span className="todo col-6  float-start ">Done</span>
                                <span className=" col-6 todo   ">To Do</span>
                            </div>
                        </div>
                        <div className="col-4"><img src={imgSaly}/></div>

                    </div>
                )}
            </Fragment>
        )
    } else {
        return (
            <div className="CardCreateNewEvent">
                <div><img src={img}/></div>
                <span>No Upcoming House Party</span>
                <p>Plan your house party</p>
                <ButtonCreateNewEvent handlerClick={() => clickHandler()}/>
            </div>
        )
    }

}
export default CardCreateNewEvent
