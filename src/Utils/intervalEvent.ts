import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../Hook/hook";
import {setPreviuseEvent} from "../Reducer/previuseEventSlice";
import {removePreviuseItem} from "../Reducer/eventSlice";

export default function IntervalEvent() {
    const state = useAppSelector(state => state.event)

    const dispatch = useAppDispatch()
    useEffect(() => {
        // Set up the interval to check every midnight
        const intervalId = setInterval(() => {
            const currentDate = new Date().toLocaleDateString("en-US");

            for (let i = 0; i < state.itemsList.length; i++) {
                const subArray = state.itemsList[i];
                const eventDate = new Date(String(subArray.eventDate)).toLocaleDateString("en-US");
                // Check if the event_date has passed
                if (eventDate < currentDate) {
                    dispatch(setPreviuseEvent(state.itemsList[i]))
                    dispatch(removePreviuseItem(Number(subArray.id)))
                }
            }
        }, 1000); // Check every minute

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return null
}
