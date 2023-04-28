import {Fragment} from "react";
import SelectButton from "../../Button/SelecteButton/selectButton";
import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {AlcoholTypeEnum} from "../../../Enums/alcoholTypeEnum";
import {alcoholSelect} from "../../../Reducer/alcoholSlice";

const AlcoholItems = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.alcohol)
    const selectHandler = (id: number, value: number) => {
        dispatch(alcoholSelect({id, value}))
    }
    return (
        <Fragment>
            {AlcoholTypeEnum.map((item: any) =>
                <SelectButton key={item.id} handlerClick={() => selectHandler(item.id, item.value)} child={item.name}
                              selected={state.id === item.id ? true : false}/>
            )}
        </Fragment>
    )
}
export default AlcoholItems
