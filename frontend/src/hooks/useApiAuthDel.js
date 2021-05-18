import { useState, useEffect } from 'react';
import BackendApi from '../api/backendApi';

const useAuthApi = () => {
    const [ returnData, setReturnData ] = useState();
    const [ outbound, setOutbound ] = useState();
    const [ isloading, setIsLoading ] = useState(true);

    useEffect( () => {
        async function get() {
            setIsLoading(true);
            let resp = await BackendApi.deleteEncounter(
                    outbound.username, 
                    outbound.encounterId, 
                    outbound.authToken);

            setReturnData(resp);
            
            setIsLoading(false);
        }
        if(outbound !== undefined){
            get();
        }
    }, [ outbound ]);

    return [ returnData, isloading, setOutbound ];
}

export default useAuthApi;