import { useState } from "react";
import { Input, Form } from "reactstrap";

const InputHitPoints = ({ changeHitPoints }) => {
    const [ hitPointChange, setHitPointChange ] = useState('');
    const ADD = '+';
    const SUB = '-';

    const handleChange = e => {
        setHitPointChange(e.target.value)
    };
    
    const handleSubmit = e =>{
        e.preventDefault();
        const opp = hitPointChange.charAt(0);
        const change =  opp === ADD || opp === SUB 
            ? parseInt(hitPointChange.slice(1))
            : parseInt(hitPointChange);
        
        if( Number.isInteger(change) ){
            if( opp === ADD ){
                changeHitPoints(change);
            }else{
                changeHitPoints(-change);
            }
            setHitPointChange(0);
        }
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
                    type='text'
                    onChange={handleChange}
                    value={hitPointChange}
                    placeholder='0'
                />
            </Form>
        </>
    )
}

export default InputHitPoints;