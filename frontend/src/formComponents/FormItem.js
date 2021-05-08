import { FormGroup, Label } from "reactstrap";


const FormItem = ({ name, type, placeholder }) => {
    return (
        <FormGroup>
            <Label for={name}>{name}</Label>
            <Input type={type} name={name} placeholder={placeholder} />
        </FormGroup>
    )
}

export default FormItem;