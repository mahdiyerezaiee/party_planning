import "./style.scss"
import React from "react";
import ButtonBackTodo from "../../Button/ButtonBackTodo/buttonBack";

const HeaderTodoList:React.FC = () => {
  return(
      <div className="HeaderList">
        <ButtonBackTodo />
        <span>Checklist</span>
      </div>
  )
}
export default HeaderTodoList