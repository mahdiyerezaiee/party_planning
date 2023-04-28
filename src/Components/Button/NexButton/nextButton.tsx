import React from "react";
import "./style.scss"

/**
 * Define Props interface with handlerClick and statusDisabled props
 */
interface Props {
    handlerClick:()=> void,
    statusDisabled:boolean
}

/**
 * NextButton component with Props interface as a generic type
 *
 * @param handlerClick
 * @param statusDisabled
 * @constructor
 */
const NextButton:React.FC<Props> = ( { handlerClick , statusDisabled } ) => {
  return (
      <button className="nexButton" disabled={statusDisabled} onClick={handlerClick}>NEXT</button>
  )
}
export default NextButton