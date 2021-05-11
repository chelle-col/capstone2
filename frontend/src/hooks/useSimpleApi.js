import { useState, useEffect } from 'react';
import BackendApi from '../api/backendApi';

const useSimpleApi = (path, secondPath='') => {
    const [ data, setData ] = useState();
    const [ isloading, setIsLoading ] = useState(true);

    useEffect( () => {
        async function get() {
            let resp = await BackendApi.get(path, secondPath);
            setData(resp);
            setIsLoading(false);
        }
        get();
    }, [ data ]);

    return [ data, isloading ];
}

export default useSimpleApi;