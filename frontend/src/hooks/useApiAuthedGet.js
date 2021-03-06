import { useState, useEffect } from 'react';
import BackendApi from '../api/backendApi';

/** Uses authorized routes to get information from api
 * 
 */
const useAuthApi = () => {
    // Multiple data items to component
    const [ returnDataMulti, setReturnData ] = useState();
    // Single data item to component
    const [ returnDataSingle, setReturnDataSingle ] = useState();
    // Data to api
    const [ outbound, setOutbound ] = useState();
    // If loading
    const [ isloading, setIsLoading ] = useState(true);

    useEffect( () => {
        // Gets single enounter
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
        // Gets all encounters
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