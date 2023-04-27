import React, {Fragment} from "react";
import HeaderHome from "../../Components/Header/HeaderHome/headerHome";
import CardCreateNewEvent from "../../Components/Card/CardCreateNewEvent/cardCreateNewEvent";
import PreviuseHouseParties from "../../Components/Card/PreviousHouseParties/previuseHouseParties";
import IntervalEvent from "../../Utils/intervalEvent";
const Home = () => {
    return(


    <Fragment >
        <IntervalEvent/>

        <HeaderHome/>
         <CardCreateNewEvent/>
         <PreviuseHouseParties/>
      </Fragment>
 )
}
export default Home
