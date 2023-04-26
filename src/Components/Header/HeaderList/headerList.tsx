import ButtonBack from "../../Button/ButtonBack/buttonBack";
import "./style.scss"
import {ProgressBar} from "react-bootstrap";
import React from "react";
interface Props{
    now:number
}
const HeaderList:React.FC<Props> = ({now}) => {
  return(
      <div className="HeaderList">
        <ButtonBack />
        <span>Create a New Event</span>
          <ProgressBar now={now} />
      </div>
  )
}
export default HeaderList