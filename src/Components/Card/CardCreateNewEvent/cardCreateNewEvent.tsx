import ButtonCreateNewEvent from "../../Button/ButtonCreateNewEvent/buttonCreateNewEvent";
import "./style.scss"
import img from "../../../Assets/Img/createNewEvent.png"
import {useAppDispatch} from "../../../Hook/hook";
import {pagePreservative} from "../../../Reducer/pageSlice";
const CardCreateNewEvent = () => {
    const dispatch = useAppDispatch()
const clickHandler = () => {
  dispatch(pagePreservative(2))
}
    return(
      <div className="CardCreateNewEvent" >
          <div><img src={img}/></div>
          <span >No Upcoming House Party</span>
          <p>Plan your house party</p>
          <ButtonCreateNewEvent handlerClick={()=>clickHandler()}/>
          </div>
  )
}
export default CardCreateNewEvent