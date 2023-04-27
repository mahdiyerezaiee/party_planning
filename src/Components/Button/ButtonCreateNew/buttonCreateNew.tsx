import React from "react";
import "./style.scss"
interface Props {
    handlerClick:()=> void
}
const ButtonCreateNew:React.FC<Props> = ({handlerClick}) => {
  return(
      <button className="buttonCreateNew" onClick={handlerClick}> Create New </button>

)
}
export default ButtonCreateNew