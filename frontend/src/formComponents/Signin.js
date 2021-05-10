import { useState } from 'react';
import { Button, Form } from 'reactstrap';
import FormInput from './FormInput';

const Signin = () => {
    const [ currentinfo, setCurrentInfo ] = useState({username:'', password: ''});

    const handleChange = e => {
        setCurrentInfo( currentinfo => ({
            ...currentinfo,
            [e.target.name] : e.target.value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        
    }

    return (
        <>
        <h1 className='m-3'>Sign In</h1>
        <div className='container border border-primary rounded'>
        <Form onSubmit={handleSubmit}>
            <FormInput name='username' title='Username' type='input' placeholder='username' handleChange={handleChange} value={currentinfo.username}/>
            <FormInput name='password' title='Password' type='password' placeholder='password' handleChange={handleChange} value={currentinfo.password}/>
            <Button className='m-2' color='primary'>Sign In</Button>
        </Form>
        </div>
        </>
        )
}

export default Signin;