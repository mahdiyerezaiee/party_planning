import {OccasionColor} from "../Enums/occasionTypeEnum";

export const ColorOccasin = (id: number) => {
    return (OccasionColor.filter((item: any) => item.id === id).map((item: any) => item.color))
}
