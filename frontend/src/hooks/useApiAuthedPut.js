import { useState, useEffect } from 'react';
import BackendApi from '../api/backendApi';

/** Uses authorized routes to put information to api
 * 
 */
const useAuthApi = () => {
    // Data to component
    const [ returnData, setReturnData ] = useState();
    // Data to api
    const [ outbound, setOutbound ] = useState();
    // If loading data
    const [ isloading, setIsLoading ] = useState(false);

    useEffect( () => {
        async function get() {
            setIsLoading(true);
            let resp;
            if(outbound.id !== undefined){
                resp = await BackendApi.putEnconter(
                        outbound.username, 
                        outbound.authToken, 
                        outbound.monsters, 
                        outbound.id);
            }else{
                resp = await BackendApi.createEncounter(
                        outbound.username, 
                        outbound.authToken, 
                        outbound.monsters,
                        outbound.name,
                        outbound.description);            
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