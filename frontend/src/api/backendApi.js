// class to use api with backend
import axios from 'axios';

const BASE_API_URL = 'http://localhost:3001/';

class BackendApi {
    static async getMonsters (){
        const resp = await axios.get(BASE_API_URL + 'monsters/');
        return resp.data;
    }

    static async getMonster ( slug ){
        const resp = await axios.get(BASE_API_URL + `monsters/${slug}`);
        return resp.data;
    }
}

export default BackendApi;