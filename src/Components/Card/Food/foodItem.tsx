import {Fragment} from "react";
import SelectButton from "../../Button/SelecteButton/selectButton";
import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {FoodTypeEnum} from "../../../Enums/foodTypeEnum";
import {foodSelect} from "../../../Reducer/foodSlice";

const FoodItems = () => {
    const dispatch = useAppDispatch()
    const state=useAppSelector(state => state.food)
    const selectHandler =(id:number)=>{
        dispatch(foodSelect(id))
    }
    return(
        <Fragment>
            {FoodTypeEnum.map((item:any)=>
                    <SelectButton key={item.id} handlerClick={()=>selectHandler(item.id)} child={item.name} selected={state.id === item.id ? true : false}/>
)}
    </Fragment>
)
}
export default FoodItems