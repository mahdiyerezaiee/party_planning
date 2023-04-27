import {Fragment} from "react";
import SelectButton from "../../Button/SelecteButton/selectButton";
import {InviteTypeEnum} from "../../../Enums/inviteTypeEnum";
import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {inviteSelect} from "../../../Reducer/inviteSlice";
import {DecoratorTypeEnum} from "../../../Enums/decoratorTypeEnum";
import {decoratorSelect} from "../../../Reducer/decoratorSlice";

const DecoratorItems = () => {
    const dispatch = useAppDispatch()
    const state=useAppSelector(state => state.decorator)
    const selectHandler =(id:number)=>{
        dispatch(decoratorSelect(id))
    }
    return(
        <Fragment>
            {DecoratorTypeEnum.map((item:any)=>
                <SelectButton key={item.id} handlerClick={()=>selectHandler(item.id)} child={item.name} selected={state.id === item.id ? true : false}/>
            )}
        </Fragment>
    )
}
export default DecoratorItems