import { useState } from 'react';
import { useDispatch } from 'react-redux';
import BackendApi from '../api/backendApi';
import { addUser } from '../redux/actionCreaters';

const useAuthApi = () => {
    const UNAUTHORIZED = 'unauthorized';                // the Unauth token
    const [ errors, setErrors ] = useState([]);         // holds any errors from db
    const dispatch = useDispatch();
    // const [ getLocalToken, setLocalToken, getLocalUser, removeLocalToken ] = useLocalStorage();
                                                        // local storage

    // Gets and sets the token from a given user and path
    async function getToken( user, path ) {
        try{
            let result = await BackendApi.login( user, path );
            // setLocalToken( user.username, result );
            return result;
        }catch (e) {
            const err = typeof e.response.data.error.message === 'array' ? e.response.data.error.message[0] : e.response.data.error.message;
            setErrors(err);
            return UNAUTHORIZED;
        }
    };

    // Logs the user in, using getToken
    const login = async ( user ) =>{
        let token = await getToken( user, 'login' );

        if(token === UNAUTHORIZED){
            return false;
        }
        
        // get user from api 
        const fullUser = await BackendApi.get( user.username, token.token );
        console.log(fullUser);
        dispatch(addUser({ ...fullUser.user, token }));
        return true;
    };

    // Signs user up using getToken
    const signup = async ( user ) => {
        let token = await getToken( user, 'register' );
        if( token === UNAUTHORIZED ){
            return false;
        }
        dispatch( addUser({ ...user, token }));
        return true;
    };

    return [ errors, login, signup ];
}

export default useAuthApi;