import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'reactstrap';
import FormInput from './FormInput';

const SignUp = ({ error, signup }) => {
    const history = useHistory();
    const [ localErrors, setLocalErrors ] = useState([]);

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

    const handleSubmit = async e => {
        e.preventDefault();
        const errs = checkForEmpty();
        setLocalErrors(errs);
        if ( errs.length === 0 ){
            const isLoggedIn = await signup( currentinfo );
            if( isLoggedIn ){
                history.push(`/${currentinfo.username}`)
            }
        }
    }

    const checkForEmpty = () => {
        const empty = Object.keys(currentinfo).filter( k => currentinfo[k] === '' );
        return empty;
    }

    const isEmpty = field => {
        if( localErrors.includes(field)){
            return true;
        }
        return false;
    }

    const isInErrors = (name) => {
        if( error.length !== 0 ){
            console.log(error)
            if(error.includes(name)){
                return true;
            }
        }
        return false;
    }

    return (
        <>
            <h1 className='m-3'>Sign Up</h1>
            <div className='container border border-primary rounded'>
                <Form onSubmit={handleSubmit}>
                    <FormInput name='username' title='Username' type='input' placeholder='username' handleChange={handleChange} value={currentinfo.username}/>
                    {isEmpty('username') && <span className='text-danger'>This field cannot be empty</span>}
                    {isInErrors('username') && <span className='text-danger'>Username already taken</span>}
                    <FormInput name='password' title='Password' type='password' placeholder='password' handleChange={handleChange} value={currentinfo.password}/>
                    {isEmpty('password') && <span className='text-danger'>This field cannot be empty</span>}
                    {isInErrors('password') && <span className='text-danger'>Password must be more than 5 characters</span>}
                    <FormInput name='firstName' title='First Name' type='input' placeholder='first name' handleChange={handleChange} value={currentinfo.firstName}/>
                    {isEmpty('firstName') && <span className='text-danger'>This field cannot be empty</span>}
                    <FormInput name='lastName' title='Last Name' type='input' placeholder='last name' handleChange={handleChange} value={currentinfo.lastName}/>
                    {isEmpty('lastName') && <span className='text-danger'>This field cannot be empty</span>}
                    <br></br>
                    <Button className='m-2' color='primary'>Sign Up</Button>
                </Form>
            </div>
        </>
        )
}

export default SignUp;