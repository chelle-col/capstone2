import { useState, useEffect } from 'react';
import BackendApi from '../api/backendApi';

const useAuthApi = () => {
    const [ returnDataMulti, setReturnData ] = useState();
    const [ returnDataSingle, setReturnDataSingle ] = useState();
    const [ outbound, setOutbound ] = useState();
    const [ isloading, setIsLoading ] = useState(true);

    useEffect( () => {
        async function getEncounter() {
            setIsLoading(true);

            const resp = await BackendApi.getEncounterById(
                outbound.username,
                outbound.id,
                outbound.authToken
            )
            setReturnDataSingle(resp);
            setIsLoading(false);
        }

        async function get() {
            setIsLoading(true);

            const resp = await BackendApi.getEncounters(
                    outbound.username, 
                    outbound.authToken
            );

            setReturnData(resp);
            setIsLoading(false);
        }
        if(outbound !== undefined){
            if( outbound.id !== undefined){
                getEncounter();
            }else{
                get();
            }
        }
    }, [ outbound ]);

    return [ returnDataMulti, returnDataSingle, isloading, setOutbound ];
}

export default useAuthApi;