import "./style.scss"
import {useAppSelector} from "../../Hook/hook";
import {conditionalComponent} from "../../Utils/conditionalComponent";

const Container = () => {
  const state = useAppSelector(state => state.page)

  return(
      <div>{conditionalComponent(state)}</div>
  )
}
export default Container