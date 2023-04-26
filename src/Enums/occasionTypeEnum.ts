import Other  from "../Assets/Img/Other.png"
import MeetUp  from "../Assets/Img/MeetUp.png"
import Dinner  from "../Assets/Img/Dinner.png"
import Anniversary  from "../Assets/Img/Anniversary.png"
import Birthday  from "../Assets/Img/Birthday.png"
export const OccasionTypeEnum:any=[
    {name:'Birthday',id:1 ,icon:Birthday },
    {name:'Anniversary',id:2 ,icon:Anniversary } ,
    {name:'Dinner',id:3,icon:Dinner},
    {name:'Meet up',id:4,icon:MeetUp },
    {name:'Other',id:5,icon:Other },

]

export const OccasionColor:any =[
    {name:'Birthday',id:1, color:"rgba(216, 152, 255, 1)"  , bg:"rgba(37, 27, 39, 1)"},
    {name:'Anniversary',id:2, icon:Anniversary ,color:"rgba(255, 154, 152, 1)"  , bg:"rgba(39, 28, 27, 1)" } ,
    {name:'Dinner',id:3, color:"rgba(152, 255, 156, 1)"  , bg:"rgb(26,44,28)"},
    {name:'Meet up',id:4,color:"rgba(118, 169, 255, 1)"  , bg:"rgb(27,29,39)" },
    {name:'Other',id:5, color:"rgba(255, 237, 155, 1)"  , bg:"rgb(44,44,28)" }
]