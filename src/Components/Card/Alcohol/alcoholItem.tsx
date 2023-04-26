import {Fragment} from "react";
import SelectButton from "../../Button/SelecteButton/selectButton";
import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {AlcoholTypeEnum} from "../../../Enums/alcoholTypeEnum";
import {alcoholSelect} from "../../../Reducer/alcoholSlice";

const AlcoholItems = () => {
    const dispatch = useAppDispatch()
    const state=useAppSelector(state => state.alcohol)
    const selectHandler =(id:number)=>{
        dispatch(alcoholSelect(id))
    }
    return(
        <Fragment>
            {AlcoholTypeEnum.map((item:any)=>
                <SelectButton handlerClick={()=>selectHandler(item.id)} child={item.name} selected={state.id === item.id ? true : false}/>
            )}
        </Fragment>
    )
}
export default AlcoholItems