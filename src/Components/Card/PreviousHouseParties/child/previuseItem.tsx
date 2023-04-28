import "./style.scss"
import {PreviuseItemConfig} from "../../../../Confighs/previuseItem";
import {BgOccasin} from "../../../../Utils/occasionBg";
import {ColorOccasin} from "../../../../Utils/occasionColor";
import {useAppSelector} from "../../../../Hook/hook";
import {imgOccasin, NameOccasin} from "../../../../Utils/occasionType";

const PreviuseItem = () => {
    const state = useAppSelector(state => state.previuseEvent)

    if (state.itemsList.length > 0) {
        return (
            <div className=" pt-2 row gy-5 ">
                {state.itemsList.map((item: any) =>
                    <div key={item.id} className=" col-6 ">
                        <div className="PreviuseItem ">
                            <div className="iconOccasin" style={{
                                background: BgOccasin(item.occasionEventType),
                                borderColor: ColorOccasin(item.occasionEventType)
                            }}><img src={imgOccasin(item.occasionEventType)}/></div>
                            <h5>{item.eventName}`s {NameOccasin(item.occasionEventType)}</h5>
                            <span>{item.eventDate}</span>
                            <span>{item.eventTime}</span>
                        </div>
                    </div>
                )}
            </div>
        )
    } else {
        return (
            <div className=" pt-2 row gy-5 ">
                {PreviuseItemConfig.map((item: any) =>
                    <div key={item.OccasionType} className=" col-6 ">
                        <div className="PreviuseItem ">
                            <div className="iconOccasin" style={{
                                background: BgOccasin(item.OccasionType),
                                borderColor: ColorOccasin(item.OccasionType)
                            }}><img src={imgOccasin(item.OccasionType)}/></div>
                            <h5>{item.name}`s {NameOccasin(item.OccasionType)}</h5>
                            <span>{item.Date}</span>
                            <span>{item.Time}</span>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
export default PreviuseItem