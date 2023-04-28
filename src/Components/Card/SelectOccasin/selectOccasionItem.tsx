import {OccasionTypeEnum} from "../../../Enums/occasionTypeEnum";
import "./style.scss"
import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {occasionSelect} from "../../../Reducer/occasionSlice";
import {BgOccasin} from "../../../Utils/occasionBg";
import {ColorOccasin} from "../../../Utils/occasionColor";
import {setOccasion} from "../../../Reducer/eventSlice";
// import {setEventOccasion} from "../../../Reducer/eventSlice";
const SelectOccasionItem = () => {
    const dispatch = useAppDispatch()
const state=useAppSelector(state => state.occasion)
const stateEvent=useAppSelector(state => state.event)


 const selectHandler =(id:number)=>{
        dispatch(occasionSelect(id))
     dispatch(setOccasion({ id:stateEvent.id - 1 , occasionEventType:id }))

 }

    return(
    <div className="selectOccasion row  pt-2 row gy-2">
        <span>What is the occasion?</span>
        {OccasionTypeEnum.map((item:any)=>
            <div onClick={()=>selectHandler(item.id)} key={item.id} className=" col-4">
                <div className="selectOccasionItem"  style={{
                    background: BgOccasin(state.id === item.id?  item.id : null),
                    borderColor: ColorOccasin(state.id === item.id?  item.id : null)
                }}>
                <div> <img src={item.icon}/></div>
                <span>{item.name}</span>
                </div>
            </div>
        )}
    </div>
)
}
export default SelectOccasionItem