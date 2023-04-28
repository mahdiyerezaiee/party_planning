import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import React, {Fragment} from "react";
import {useAppDispatch, useAppSelector} from "../../../../Hook/hook";
import {changeActiveTodo} from "../../../../Reducer/eventSlice";
import "./style.scss"
const CheckListItem = () => {
    const stateEvent = useAppSelector(state => state.event)
    const stateId = useAppSelector(state => state.eventId)
    const dispatch = useAppDispatch()
    const checkHandler = (id: number, idTodo: number, active: boolean) => {
        dispatch(changeActiveTodo({id, idTodo, active}))
    }
    return (
        <div className="checkListItem">
            {stateEvent.itemsList.filter((item: any) => item.id === stateId.id).map((item: any) =>
                item.todo.map((itemTodo: any) =>
                    <InputGroup key={itemTodo.id} className="mb-3">
                        <InputGroup.Checkbox  aria-label="Checkbox for following text input" checked={itemTodo.active}
                                             onChange={() => checkHandler(stateId.id, itemTodo.id, !itemTodo.active)}/>
                        <Form.Control aria-label="Text input with checkbox" disabled={true} value={itemTodo.name}/>
                    </InputGroup>
                )
            )}
        </div>
    )
}
export default CheckListItem