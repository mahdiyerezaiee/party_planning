import {Fragment} from "react";
import SelectButton from "../../Button/SelecteButton/selectButton";
import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {DecoratorTypeEnum} from "../../../Enums/decoratorTypeEnum";
import {decoratorSelect} from "../../../Reducer/decoratorSlice";

const DecoratorItems = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.decorator)
    const selectHandler = (id: number, value: number) => {
        dispatch(decoratorSelect({id, value}))
    }
    return (
        <Fragment>
            {DecoratorTypeEnum.map((item: any) =>
                <SelectButton key={item.id} handlerClick={() => selectHandler(item.id, item.value)} child={item.name}
                              selected={state.id === item.id ? true : false}/>
            )}
        </Fragment>
    )
}
export default DecoratorItems
