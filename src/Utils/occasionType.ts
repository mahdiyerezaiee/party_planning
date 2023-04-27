import {OccasionTypeEnum} from "../Enums/occasionTypeEnum";

export const imgOccasin = (id: number) => {
    return (OccasionTypeEnum.filter((item: any) => item.id === id).map((item: any) => item.icon))

}
export const NameOccasin = (id: number) => {
    return (OccasionTypeEnum.filter((item: any) => item.id === id).map((item: any) => item.name))

}