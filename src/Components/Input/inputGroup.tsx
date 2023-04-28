import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, {Fragment} from "react";
import "./style..scss"

interface Props {
    nameInput: any,
    type: string,
    placeholder: string,
    value: any,
    nameLabel: string,
    onChange: any,
    name: string
}

const InputGroups: React.FC<Props> = ({nameLabel, name, nameInput, placeholder, type, value, onChange}) => {
    return (
        <Fragment>
            <Form.Label>{nameLabel}</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
                <InputGroup.Text id="basic-addon1">{nameInput}</InputGroup.Text>

            </InputGroup>
        </Fragment>
    )
}
export default InputGroups
