import {OccasionColor} from "../Enums/occasionTypeEnum";

 export  const BgOccasin = (id: number) => {
    return (OccasionColor.filter((item: any) => item.id === id).map((item: any) => item.bg))

}