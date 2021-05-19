import { useState, useEffect } from 'react';
import BackendApi from '../api/backendApi';

/** Deletes item from api
 * 
 */
const useAuthApi = () => {
    // Data to client component
    const [ returnData, setReturnData ] = useState();
    // Data to api
    const [ outbound, setOutbound ] = useState();
    // If currently getting from api
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