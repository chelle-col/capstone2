import { useState, useEffect } from 'react';
import BackendApi from './backendApi'

const useMonsterApi = (slug) => {
    const [ data, setData ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () => {
        async function getData() {
            let resp = await BackendApi.getMonster(slug);
            setData(resp);
            setIsLoading(false);
        }
        getData();
    }, [ slug ])

    return [ isLoading, data ];
}
export default useMonsterApi;