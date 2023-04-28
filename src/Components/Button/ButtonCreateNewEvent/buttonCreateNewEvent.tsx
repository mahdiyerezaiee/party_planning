import "./style.scss"
import React from "react";

/**
 * Define the type of the props passed to this component
 */
interface Props {
    handlerClick: () => void
}

/**
 * Define the ButtonCreateNewEvent component as a functional component that takes in props of type Props
 *
 * @param handlerClick
 * @constructor
 */
const ButtonCreateNewEvent: React.FC<Props> = ({handlerClick}) => {
    return (
        <button className="buttonCreateNewEvent" onClick={handlerClick}> CREATE A NEW EVENT </button>
    )
}
export default ButtonCreateNewEvent
