import "./style.scss"
import React from "react";
interface Props {
  handlerClick:()=> void
}
const ButtonCreateNewEvent:React.FC<Props> = ({handlerClick}) => {
  return(
      <button className="buttonCreateNewEvent" onClick={handlerClick}> CREATE A NEW EVENT </button>
  )
}
export default ButtonCreateNewEvent