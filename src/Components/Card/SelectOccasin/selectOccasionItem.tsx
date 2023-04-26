import {OccasionColor, OccasionTypeEnum} from "../../../Enums/occasionTypeEnum";
import "./style.scss"
import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {occasionSelect} from "../../../Reducer/occasionSlice";
import {BgOccasin} from "../../../Utils/occasionBg";
import {ColorOccasin} from "../../../Utils/occasionColor";
const SelectOccasionItem = () => {
    const dispatch = useAppDispatch()
const state=useAppSelector(state => state.occasion)


 const selectHandler =(id:number)=>{
        dispatch(occasionSelect(id))
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