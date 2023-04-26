import {Fragment} from "react";
import SelectButton from "../../Button/SelecteButton/selectButton";
import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {alcoholSelect} from "../../../Reducer/alcoholSlice";
import {BoardGameTypeEnum} from "../../../Enums/boardGameTypeEnum";
import {boradGameSelect} from "../../../Reducer/boardGameSlice";

const BoardGameItem = () => {
    const dispatch = useAppDispatch()
    const state=useAppSelector(state => state.boradGame)
    const selectHandler =(id:number)=>{
        dispatch(boradGameSelect(id))
    }
    return(
        <Fragment>
            {BoardGameTypeEnum.map((item:any)=>
                <SelectButton handlerClick={()=>selectHandler(item.id)} child={item.name} selected={state.id === item.id ? true : false}/>
            )}
        </Fragment>
    )
}
export default BoardGameItem