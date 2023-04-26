import {GuestColor} from "../Enums/guestTypeEnum";

 export const ColorGuest = (id: number) => {
    return (GuestColor.filter((item: any) => item.id === id).map((item: any) => item.color))

}