import { Form, Input } from 'reactstrap';
import { useState } from 'react';
import { INITIATIVE } from './names';

const InitItem = ({ item, obj }) => {
    const [ isInput, setIsInput ] = useState(false);
    const [ currentInfo, setCurrentInfo ] = useState({
        'name': item.name,
        'initiaitve': item.initiaitve || 0
        }
    );
    
    const handleFocusIn = () => {
        setIsInput(true);
    }
    const handleFocusOut = () => {
        setIsInput(false);
    }

    const handleChange = e => {
        e.preventDefault();
        if(e.target.name == INITIATIVE){
            obj[INITIATIVE] = parseInt(e.target.value);
        }else{
            obj[e.target.name] = e.target.value;
        }
        setCurrentInfo((currentInfo) => (
            {
            ...currentInfo,
            [e.target.name]: e.target.value 
        }
        ));
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleFocusOut();
    }

    return (
        <div className='container-fluid p-0'>
                {!isInput &&
                <div onClick={handleFocusIn} className='row'>
                    <h4 className='col'>{obj.name}</h4> <h4 className='col'>{obj[INITIATIVE]}</h4>
                </div>
                }
                {isInput && 
                <Form inline
                    className='row'
                        onSubmit={handleSubmit} 
                        onFocus={handleFocusIn} 
                        onBlur={handleFocusOut}>
                    <Input 
                        className='col m-2'
                        name="name"
                        title="Name"
                        type="input"
                        onChange={handleChange}
                        value={currentInfo.name}
                    />
                    <Input 
                        className='col m-2'
                        name={INITIATIVE}
                        title={'Initiaitve'}
                        type={'input'}
                        onChange={handleChange}
                        value={currentInfo[INITIATIVE]}
                    />
                </Form>}
        </div>
    )
}

export default InitItem;