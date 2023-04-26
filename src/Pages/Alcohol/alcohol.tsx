import {useAppDispatch, useAppSelector} from "../../Hook/hook";
import {pagePreservative} from "../../Reducer/pageSlice";
import HeaderList from "../../Components/Header/HeaderList/headerList";
import AlcoholImg from "../../Assets/Img/Alcohol.png";
import NextButton from "../../Components/Button/NexButton/nextButton";
import AlcoholItems from "../../Components/Card/Alcohol/alcoholItem";

const Alcohol = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.alcohol)
    const clickHandler = () => {
        dispatch(pagePreservative(8))
    }
    return(
        <div className="invite">
            <HeaderList now={60}/>
            <div className="invite-img">
                <img src={AlcoholImg}/>

            </div>
            <span>Will there be alcohol?</span>
            <AlcoholItems/>
            <NextButton handlerClick={()=>clickHandler()} statusDisabled={state.id ? false : true}/>
        </div>
    )


}
export default Alcohol