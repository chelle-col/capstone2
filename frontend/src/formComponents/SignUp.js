import { useState } from 'react';
import { Form, Button } from 'reactstrap';
import FormInput from './FormInput';

const SignUp = () => {
    const INIT_STATE = {
        username: '',
        password:  '',
        firstName: '',
        lastName: ''
    }
    const [ currentinfo, setCurrentInfo ] = useState(INIT_STATE);

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
            <h1 className='m-3'>Sign Up</h1>
            <div className='container border border-primary rounded'>
                <Form onSubmit={handleSubmit}>
                    <FormInput name='username' title='Username' type='input' placeholder='username' handleChange={handleChange} value={currentinfo.username}/>
                    <FormInput name='password' title='Password' type='password' placeholder='password' handleChange={handleChange} value={currentinfo.password}/>
                    <FormInput name='firstName' title='First Name' type='input' placeholder='first name' handleChange={handleChange} value={currentinfo.firstName}/>
                    <FormInput name='lastName' title='Last Name' type='input' placeholder='last name' handleChange={handleChange} value={currentinfo.lastName}/>
                    <Button className='m-2' color='primary'>Sign Up</Button>
                </Form>
            </div>
        </>
        )
}

export default SignUp;