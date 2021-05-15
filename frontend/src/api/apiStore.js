import BackendApi from './backendApi';
import { addAllMonsters } from '../redux/actionCreaters';

export const addMonstersFromApi = () => {
    return async function (dispatch) {
        let data = await BackendApi.getMonsters();
        dispatch(addAllMonsters( data ));
    }
}