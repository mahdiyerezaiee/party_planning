import {useAppDispatch, useAppSelector} from "../../Hook/hook";
import {pagePreservative} from "../../Reducer/pageSlice";
import HeaderList from "../../Components/Header/HeaderList/headerList";
import NextButton from "../../Components/Button/NexButton/nextButton";
import InviteItems from "../../Components/Card/E-invite/invite";
import inviteImg from "../../Assets/Img/Invite.png";
import "./syle.scss"
const Invite = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.invite)
    const clickHandler = () => {
        dispatch(pagePreservative(6))
    }
    return(
        <div className="invite">
            <HeaderList now={40}/>
            <div className="invite-img">
            <img src={inviteImg}/>

            </div>
            <span>Do you want to send e-invite?</span>
            <InviteItems/>
            <NextButton handlerClick={()=>clickHandler()} statusDisabled={state.id ? false : true}/>
        </div>
    )

}
export default Invite