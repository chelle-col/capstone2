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
    async function getToken( user ) {
        try{
            let result = await BackendApi.login( user );
            // setLocalToken( user.username, result );
            return result;
        }catch (e) {
            setErrors(e.response.data.error.message);
            return UNAUTHORIZED;
        }
    };

    // Logs the user in, using getToken
    const login = async ( user ) =>{
        let token = await getToken( user );

        if(token === UNAUTHORIZED){
            return false;
        }
        
        // get user from api 
        const fullUser = await BackendApi.get( user.username, token.token );
        console.log(fullUser);
        dispatch(addUser({ ...fullUser.user, token }));
        return true;
    };

    // // Signs user up using getToken
    // const signup = async ( user ) => {
    //     setUser( { username: user.username  } );
    //     await getToken( user, 'register' );
    // };

    // // Signs user out of app
    // const signout = () => {
    //     setUser(undefined);
    //     setToken(UNAUTHORIZED);
    //     removeLocalToken();
    // };

    // // Updates user
    // const updateUser = async ( newUser ) =>{
    //     console.log( newUser, token );
    //     setUser( await JoblyApi.patchUser( newUser, token ).catch( e => console.log(e.response)));
    // }

    // // If token changes, get user from api
    // // **DO NOT ADD USER TO DEPENDANCIES**
    // useEffect( ()=> {
    //     async function checkToken() {
    //         if( token !== UNAUTHORIZED && user ){
    //             setUser(await JoblyApi.getUser( user.username, token ));
    //         }else if( token !== UNAUTHORIZED ){
    //             setUser(await JoblyApi.getUser( getLocalUser(), token ));
    //         }
    //     }
    //     checkToken();
    // }, [ token ]);

    // // Check for token on load
    // useEffect( ()=>{
    //     setToken(getLocalToken( UNAUTHORIZED ));
    // }, []);

    return [ errors, login ];
}

export default useAuthApi;