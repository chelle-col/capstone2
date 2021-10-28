import { useState } from "react";
import { Input, Form } from "reactstrap";

const InputHitPoints = ({ changeHitPoints }) => {
    const [ hitPointChange, setHitPointChange ] = useState(0);

    const handleChange = e => {
        setHitPointChange(parseInt(e.target.value));
    };
    
    const handleSubmit = e =>{
        e.preventDefault();
        changeHitPoints(hitPointChange);
        setHitPointChange(0);
    };

    return(
        <>
            <Form 
                inline
                onSubmit={handleSubmit}
            >    
                <Input
                    name='hitpoints'
                    title='Hit Points'
                    type='number'
                    onChange={handleChange}
                    value={hitPointChange}
                />
            </Form>
        </>
    )
}

export default InputHitPoints;