import { FormGroup, Label, Input } from "reactstrap";

/** Input group to use in form elements
 * 
 */
const FormInput = ({ name, title, type, placeholder, handleChange, value }) => {
    return (
        <div className='m-2'>
            <FormGroup>
                <Label for={name}>{title}</Label>
                <Input type={type} name={name} placeholder={placeholder} onChange={ e => handleChange(e)} value={value}/>
            </FormGroup>
        </div>
    )
}

export default FormInput;