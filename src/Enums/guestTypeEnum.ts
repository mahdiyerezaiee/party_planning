import Small  from "../Assets/Img/small.png"
import Medium  from "../Assets/Img/medium.png"
import Large  from "../Assets/Img/large.png"



export const GuestTypeEnum:any=[
    {name:'Small',id:1 ,icon:Small , description: "(4-20 guests)"},
    {name:'Medium ' ,id:2 ,icon:Medium ,description: "(20-60 guests)"} ,
    {name:'Large',id:3,icon:Large ,description: "(60+ guests)"},


]
export const GuestColor:any =[
    {name:'Small',id:1, color:"rgba(216, 152, 255, 1)"  , bg:"rgba(37, 27, 39, 1)"},
    {name:'Medium',id:2,color:"rgba(255, 154, 152, 1)"  , bg:"rgba(39, 28, 27, 1)" } ,
    {name:'Large',id:3, color:"rgba(152, 255, 156, 1)"  , bg:"rgb(26,44,28)"}
]