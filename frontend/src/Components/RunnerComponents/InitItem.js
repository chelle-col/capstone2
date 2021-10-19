import { Button, Form, Input } from 'reactstrap';
import { useState } from 'react';
import { INITIATIVE } from './names';

const InitItem = ({ setMonsterInitiative, item, obj }) => {
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
        const value = e.target.name === INITIATIVE ? parseInt(e.target.value) : e.target.value;
        setMonsterInitiative(obj.slug, e.target.name, value);
        setCurrentInfo((currentInfo) => (
            {
            ...currentInfo,
            [e.target.name]: e.target.value 
        }
        ));
    }

    const handleRandomInitiative = () => {
        // TODO after putting monsters in state
        // need to add dex bounus to roll
        const rand = Math.floor(Math.random() * 20);
        setMonsterInitiative(obj.slug, INITIATIVE, rand);
        setCurrentInfo((currentInfo) => (
            {
            ...currentInfo,
            [INITIATIVE]: rand
        }
        ));
        handleFocusOut();
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleFocusOut();
    }

    return (
        <div className='container-fluid p-0'>
                {!isInput &&
                <div 
                    onClick={handleFocusIn} 
                    className='row'>
                        <h4 className='col text-right'>{obj?.name}</h4> <h4 className='col'>{obj?.[INITIATIVE]}</h4>
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
                        type={'number'}
                        onChange={handleChange}
                        value={currentInfo[INITIATIVE]}
                    />
                    <Button onClick={handleRandomInitiative}>
                        <i className="fas fa-dice-d20"></i>
                    </Button>
                </Form>}
        </div>
    )
}

export default InitItem;