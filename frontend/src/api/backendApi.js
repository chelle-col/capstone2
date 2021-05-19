import axios from 'axios';

const BASE_API_URL = 'http://localhost:3001/';

/** Class to use api
 *  and axios
 */
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
        const resp = await axios.get(BASE_API_URL + `users/${username}/encounter`,
                        {headers : {
                            'authorization': authToken
                        }});
        return resp.data.encounters;
    }

    static async getEncounterById( username, encounterId, authToken ){
        const resp = await axios.get(BASE_API_URL + `users/${username}/encounter/${encounterId}`,
                        {headers : {
                            'authorization': authToken
                        }});
        return resp.data.encounter;
    }

    static async createEncounter( username, authToken, monsters, name, description ){
        const resp = await axios.post(BASE_API_URL + `users/${username}/encounter`,
        { monsters : monsters,
            name,
            description } , 
        {headers : {
            'authorization': authToken
        }});
        return resp.data;
    }

    static async putEnconter( username, encounterId, monsters, authToken ){
        const resp = await axios.put(BASE_API_URL + `users/${username}/encounter/${encounterId}`,
                    {...monsters},
                    {headers : {
                        'authorization': authToken
                    }});
        return resp.data;
    }

    static async deleteEncounter( username, encounterId, authToken ){
        const resp = await axios.delete(BASE_API_URL + `users/${username}/encounter/${encounterId}`,
        {headers : {
            'authorization': authToken
        }});
        return resp.data;
    }
}

export default BackendApi;