import React from "react";
import "./style.scss"

/**
 * Define the Props interface which describes the props for the component
 */
interface Props {
    handlerClick: () => void
}

/**
 * Define the ButtonCreateNew functional component that accepts Props
 *
 * @param handlerClick
 * @constructor
 */
const ButtonCreateNew: React.FC<Props> = ({handlerClick}) => {
    return (
        <button className="buttonCreateNew" onClick={handlerClick}> Create New </button>
    )
}
export default ButtonCreateNew
