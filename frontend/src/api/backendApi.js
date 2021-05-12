// class to use api with backend
import axios from 'axios';

const BASE_API_URL = 'http://localhost:3001/';

class BackendApi {
    static async getMonsters (){
        const resp = await axios.get(BASE_API_URL + 'monsters/');
        return resp.data.monsters;
    }

    static async getMonster ( slug ){
        const resp = await axios.get(BASE_API_URL + `monsters/${slug}`);
        return resp.data;
    }

    static async get( path, authToken='' ){
        console.log(authToken, 'auth')
        const resp = await axios.get(BASE_API_URL + 'users/' + path,
                        {headers : {
                            'authorization' : authToken
                        }});
        return resp.data;
    }

    static async login( user, path ) {
        const resp = await axios.post( BASE_API_URL + `auth/${path}`, 
                                    {...user} );
        return resp.data;
    }

    static async signup( user ) {
        const resp = await axios.post(BASE_API_URL + '/auth/register', {...user});
        return resp.data;
    }

    static async getEncounters( username, authToken ){
        const resp = await axios.get(BASE_API_URL + `${username}/encounter`,
                        {headers : {
                            'authorization': authToken
                        }});
        return resp.data;
    }
}

export default BackendApi;