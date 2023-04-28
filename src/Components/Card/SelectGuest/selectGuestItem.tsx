import {useAppDispatch, useAppSelector} from "../../../Hook/hook";
import {GuestTypeEnum} from "../../../Enums/guestTypeEnum";
import {guestSelect} from "../../../Reducer/guestSlice";
import {BgGuest} from "../../../Utils/guestBg";
import {ColorGuest} from "../../../Utils/guestColor";
import "./style.scss"

const SelectGuestItem = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.guest)
    const selectHandler = (id: number) => {
        dispatch(guestSelect(id))
    }

    return (
        <div className="selectGuest row  pt-2 row gy-2">
            <span>What is the size of the guest list?</span>
            {GuestTypeEnum.map((item: any) =>
                <div onClick={() => selectHandler(item.id)} key={item.id} className=" col-4">
                    <div className="selectGuestItem" style={{
                        background: BgGuest(state.id === item.id ? item.id : null),
                        borderColor: ColorGuest(state.id === item.id ? item.id : null)
                    }}>
                        <div><img src={item.icon}/></div>
                        <h6>{item.name}</h6>
                        <p>{item.description}</p>
                    </div>
                </div>
            )}
        </div>
    )

}
export default SelectGuestItem