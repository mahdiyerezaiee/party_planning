import {Fragment} from "react";
import HeaderHome from "../../Components/Header/HeaderHome/headerHome";
import CardCreateNewEvent from "../../Components/Card/CardCreateNewEvent/cardCreateNewEvent";
import PreviuseHouseParties from "../../Components/Card/PreviousHouseParties/previuseHouseParties";
const Home = () => {
 return(
     <Fragment >
        <HeaderHome/>
         <CardCreateNewEvent/>
         <PreviuseHouseParties/>
      </Fragment>
 )
}
export default Home
