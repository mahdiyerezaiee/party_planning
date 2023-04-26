import "./style.scss"
import {PreviuseItemConfig} from "../../../../Confighs/previuseItem";
import {OccasionColor, OccasionTypeEnum} from "../../../../Enums/occasionTypeEnum";
import {BgOccasin} from "../../../../Utils/occasionBg";
import {ColorOccasin} from "../../../../Utils/occasionColor";

const PreviuseItem = () => {
    const imgOccasin = (id: number) => {
        return (OccasionTypeEnum.filter((item: any) => item.id === id).map((item: any) => item.icon))

    }
    const NameOccasin = (id: number) => {
        return (OccasionTypeEnum.filter((item: any) => item.id === id).map((item: any) => item.name))

    }

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
export default PreviuseItem