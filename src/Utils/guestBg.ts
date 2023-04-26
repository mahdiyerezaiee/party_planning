import {GuestColor} from "../Enums/guestTypeEnum";

 export  const BgGuest = (id: number) => {
    return (GuestColor.filter((item: any) => item.id === id).map((item: any) => item.bg))

}