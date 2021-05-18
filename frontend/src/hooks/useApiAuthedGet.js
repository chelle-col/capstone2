import { useState, useEffect } from 'react';
import BackendApi from '../api/backendApi';

const useAuthApi = () => {
    const [ returnData, setReturnData ] = useState();
    const [ outbound, setOutbound ] = useState();
    const [ isloading, setIsLoading ] = useState(true);

    useEffect( () => {
        async function get() {
            setIsLoading(true);

            let resp;
            if( outbound.id === undefined ){
                resp = await BackendApi.getEncounterById(
                        outbound.username,
                        outbound.id,
                        outbound.authToken
                )
            } else {
                 resp = await BackendApi.getEncounters(
                        outbound.username, 
                        outbound.authToken
                );
            }

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