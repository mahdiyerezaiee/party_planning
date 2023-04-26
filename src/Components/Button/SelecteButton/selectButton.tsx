import "./style.scss"
import React from "react";
import "./style.scss"
interface Props {
    handlerClick:()=> void,
    child:string,
    selected : boolean | any,
}


const SelectButton:React.FC<Props> = ( { handlerClick ,child, selected } ) => {
    return(
        <button className={selected ?"selectBox selected" : " selectBox "}  onClick={handlerClick}>{child}</button>
    )
}
export default SelectButton