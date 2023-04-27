import "./style.scss"
import {useAppSelector} from "../../Hook/hook";
import {conditionalComponent} from "../../Utils/conditionalComponent";

const Container = () => {
  const state = useAppSelector(state => state.page)

  return(
      <div className="pb-5 ">{conditionalComponent(state)}</div>
  )
}
export default Container