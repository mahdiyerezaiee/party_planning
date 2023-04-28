import {Fragment} from "react";
import HeaderTodoList from "../../Components/Header/HeaderTodoList/headerList";
import InfoHeadChackList from "../../Components/Card/TodoList/HeaderList/infoHeadChackList";
import CheckListItem from "../../Components/Card/TodoList/CheckList/checkListItem";

/**
 * A functional component for rendering a checklist page
 *
 * @constructor
 */
const CheckList = () => {
  return(
      <Fragment>
          <HeaderTodoList/>
          <InfoHeadChackList/>
          <CheckListItem/>
      </Fragment>
  )
}
export default  CheckList