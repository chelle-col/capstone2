import BackendApi from './backendApi';
import { addAllMonsters } from '../redux/actionCreaters';

// Adds monsters from api on load
export const addMonstersFromApi = () => {
    return async function (dispatch) {
        let data = await BackendApi.getMonsters();
        dispatch(addAllMonsters( data ));
    }
}