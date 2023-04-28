import {Fragment} from "react";
import SelectButton from "../../Button/SelecteButton/selectButton";
import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {BoardGameTypeEnum} from "../../../Enums/boardGameTypeEnum";
import {boardGameSelect} from "../../../Reducer/boardGameSlice";

const BoardGameItem = () => {
    const dispatch = useAppDispatch()
    const state=useAppSelector(state => state.boardGame)
    const selectHandler =(id:number , value : number)=>{
        dispatch(boardGameSelect({id , value}))
    }
    return(
        <Fragment>
            {BoardGameTypeEnum.map((item:any)=>
                <SelectButton key={item.id} handlerClick={()=>selectHandler(item.id , item.value)} child={item.name} selected={state.id === item.id ? true : false}/>
            )}
        </Fragment>
    )
}
export default BoardGameItem