import ButtonCreateNewEvent from "../../Button/ButtonCreateNewEvent/buttonCreateNewEvent";
import "./style.scss"
import img from "../../../Assets/Img/createNewEvent.png"
import imgSaly from "../../../Assets/Img/saly.png"
import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {pagePreservative} from "../../../Reducer/pageSlice";
import {Fragment} from "react";
import {NameOccasin} from "../../../Utils/occasionType";
import ButtonCreateNew from "../../Button/ButtonCreateNew/buttonCreateNew";

const CardCreateNewEvent = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.event)

    const clickHandler = () => {
        dispatch(pagePreservative(2))
    }

    if (state.itemsList.length !== 0) {
        return (
            <Fragment>
                <div className="row">
                    <div className="textUp float-end col-6"><h3>Upcoming </h3></div>
                    <div className="NewButton col-6"><ButtonCreateNew handlerClick={() => clickHandler()}/></div>
                </div>

                {state.itemsList.map((item: any) =>
                    <div className="CardCreateNewEvent">
                        <div><img src={imgSaly}/></div>
                        <span>{item.eventName}`s {NameOccasin(item.occasionEventType)}</span>
                        <p>{Math.ceil(Math.abs(new Date(item.eventDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} Days
                            to go</p>


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