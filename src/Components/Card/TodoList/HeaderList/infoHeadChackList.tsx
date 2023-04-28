import {useAppSelector} from "../../../../Hook/hook";
import {NameOccasin} from "../../../../Utils/occasionType";
import {Fragment} from "react";
import "./style.scss"
const InfoHeadChackList = () => {
    const stateEvent = useAppSelector(state => state.event)
    const stateId = useAppSelector(state => state.eventId)

    return (
        <Fragment>
            {stateEvent.itemsList.filter((item:any)=> item.id === stateId.id).map((item: any) =>
                <div key={item.id} className="chacklist">
                    <div className="row">
                    <div className="col-8">
                        <span >{item.eventName}`s {NameOccasin(item.occasionEventType)}</span>
                        <p className="infoTodo">{Math.ceil(Math.abs(new Date(item.eventDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} Days
                            to go</p>

                    </div>
                    <div className="col-4 float-end">
                        <div className="row">
                            <span
                                className="col-6 float-start">{item.todo.filter((i: any) => i.active === true).length}</span>
                            <span className=" col-6    ">{item.todo.length - item.todo.filter((i: any) => i.active === true).length}</span>
                        </div>
                        <div className="row pt-1 ">
                            <span className="infoTodo col-6  float-start ">Done</span>
                            <span className=" col-6 infoTodo   ">To Do</span>
                        </div>
                    </div>
                    </div>
                </div>
            )}
        </Fragment>
    )


}
export default InfoHeadChackList