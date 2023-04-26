import React from "react";
import "./style.scss"
interface Props {
    handlerClick:()=> void,
    statusDisabled:boolean
}


const NextButton:React.FC<Props> = ( { handlerClick , statusDisabled } ) => {
  return (
      <button className="nexButton" disabled={statusDisabled} onClick={handlerClick}>NEXT</button>
  )
}
export default NextButton