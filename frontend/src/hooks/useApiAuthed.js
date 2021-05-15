import { useState, useEffect } from 'react';
import BackendApi from '../api/backendApi';

const useAuthApi = () => {
    const [ returnData, setReturnData ] = useState();
    const [ outbound, setOutbound ] = useState();
    const [ isloading, setIsLoading ] = useState(false);

    useEffect( () => {
        async function get() {
            setIsLoading(true);
            let resp;
            if(outbound.id !== undefined){
                resp = await BackendApi.putEnconter(outbound.username, outbound.authToken, outbound.monsters, outbound.id);
            }else{
                resp = await BackendApi.createEncounter(outbound.username, outbound.authToken, outbound.monsters);            
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