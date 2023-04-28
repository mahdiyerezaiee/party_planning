import Form from 'react-bootstrap/Form';
import React from "react";
import "./style..scss"

interface Props {
    name: string
    nameInput: string,
    type: string,
    placeholder: any,
    value: any,
    onChange: any
}

const InputText: React.FC<Props> = ({nameInput, placeholder, type, value, onChange, name}) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{nameInput}</Form.Label>
            <Form.Control name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}/>

        </Form.Group>
    )
}
export default InputText
