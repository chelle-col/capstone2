import { Form, Input } from 'reactstrap';
import { useState } from 'react';

const InitItem = ({ item, changeInitaitive }) => {
    const [ currentInfo, setCurrentInfo ] = useState({
        'name': item.name,
        'initiaitve': item.initiaitve || 0
        }
    );
    
    const handleChange = e => {
        e.preventDefault();
        setCurrentInfo( e.target.value );
    }

    const handleSubmit = e => {
        e.preventDefault();
        changeInitaitive(item.slug, currentInfo);
    }

    return (
        <>
            <h4>{item.name}</h4>
            <Form onSubmit={handleSubmit}>
                <Input 
                    name={'Initaitve'}
                    title={'Initaitve'}
                    type={'input'}
                    onChange={handleChange}
                    value={currentInfo.initiaitve}
                />
            </Form>
        </>
    )
}

export default InitItem;