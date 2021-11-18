import { Button, Form, Input } from 'reactstrap';
import { useState } from 'react';
import { INITIATIVE, IS_ACTIVE } from '../names';
import useMonsterApi from '../../../api/useMonsterApi';
import { getModifier } from '../../monster/modifier';

const InitItem = ({ setMonsterInitiative, item, obj, setTurn }) => {
    const [ isLoading, monsterInfo ] = useMonsterApi( item.slug.split('_')[0] );
    const [ isInput, setIsInput ] = useState(false);
    const [ currentInfo, setCurrentInfo ] = useState({
        'name': item.name,
        'initiaitve': item.initiaitve || 0
        }
    );
    const bg = obj[IS_ACTIVE] ? 'primary' : 'black';
    const handleFocusIn = () => {
        setTurn(obj);
    };

    const handleFocusOut = () => {
        setIsInput(false);
    };

    const handleEdit = () => {
        setIsInput(true);
    };

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
        // hang if the information isn't loaded yet
        while(isLoading){}
        const modifier = monsterInfo ? getModifier(monsterInfo.dexterity) : 0;
        const rand = Math.floor(Math.random() * 20) + modifier;
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
        <div className={`container-fluid rounded m-0 px-1 bg-${bg}`}>
                {!isInput &&
                <div 
                    className="row"
                    onClick={handleFocusIn} 
                    >
                        <h4 className='col text-center'>{obj?.name}</h4> <h4 className='col'>{obj?.[INITIATIVE]}
                        </h4>
                        <div className="col">
                            <Button className="my-1" onClick={handleEdit}>
                                <i className="fas fa-pen-nib"></i>
                            </Button>
                        </div>
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