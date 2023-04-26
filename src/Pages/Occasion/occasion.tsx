import HeaderList from "../../Components/Header/HeaderList/headerList";
import SelectOccasionItem from "../../Components/Card/SelectOccasin/selectOccasionItem";
import NextButton from "../../Components/Button/NexButton/nextButton";
import {useAppDispatch, useAppSelector} from "../../Hook/hook";
import {pagePreservative} from "../../Reducer/pageSlice";

const Occasion = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.occasion)
    const clickHandler = () => {
        dispatch(pagePreservative(3))
    }
  return(
      <div>
        <HeaderList now={10}/>
        <SelectOccasionItem/>
          <NextButton handlerClick={()=>clickHandler()} statusDisabled={state.id ? false : true}/>
      </div>
  )
}
export default Occasion