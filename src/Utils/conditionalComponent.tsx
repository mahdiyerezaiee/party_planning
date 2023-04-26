import Home from "../Pages/Home/Home";
import Occasion from "../Pages/Occasion/occasion";
import Guest from "../Pages/Guest/guest";
import FormEvent from "../Pages/FormEvent/formEvent";
import Invite from "../Pages/E-invite/invite";
import Food from "../Pages/Food/food";
import Alcohol from "../Pages/Alcohol/alcohol";
import Decorator from "../Pages/Decorator/decorator";
import BoardGame from "../Pages/BoardGame/boardGame";
interface Props {
    page : number | any
}
export const conditionalComponent = ({page}:Props)=> {
    switch (page) {
        case 1:
            return <Home/>;
        case 2:
            return <Occasion/>;
        case 3:
            return <Guest/>;
        case 4:
            return <FormEvent/>;
        case 5:
            return <Invite/>;
        case 6:
            return <Food/>;
        case 7:
            return <Alcohol/>;
        case 8:
            return <Decorator/>;
        case 9:
            return <BoardGame/>;
        default:
            return <Home/>;
    }
};