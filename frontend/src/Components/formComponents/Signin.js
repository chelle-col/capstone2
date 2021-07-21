import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import FormInput from './FormInput';

/** Sign in form for users
 * 
 */
const Signin = ({ login , errors }) => {
    const [ currentinfo, setCurrentInfo ] = useState({username:'', password: ''});
    
    const history = useHistory();

    const handleChange = e => {
        setCurrentInfo( currentinfo => ({
            ...currentinfo,
            [e.target.name] : e.target.value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const isLoggedIn = await login(currentinfo);
        if( isLoggedIn ){
            history.push(`/${currentinfo.username}`);
        }
    }

    return (
        <>
        <h1 className='m-3'>Sign In</h1>
        <div className='container border border-primary rounded'>
        {errors.length !== 0 && <div className='bg-danger text-light rounded p-2'>Username/Password not correct. Please try again</div>}
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