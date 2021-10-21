import { useState, useEffect } from 'react';
import BackendApi from './backendApi';
import { useSelector, useDispatch } from 'react-redux';
import { expandMonster } from '../redux/actionCreaters';

/** Gets a given monster from api
 * 
 */
const useMonsterApi = (slug) => {
    
    // Need to see if in state and then call api
    // set monster in redux
    const [ data, setData ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);
    const stateMonster = useSelector( st => st.monsters[slug] );
    const dispatch = useDispatch();

    useEffect( () => {
        if( slug === 'player'){
            setData(null);
            setIsLoading(false);
        }else if(stateMonster.isFullMonster){
            setData(stateMonster ? stateMonster : null );
            setIsLoading(false);
        }else{
            async function getData() {
                let resp = await BackendApi.getMonster(slug);
                setData(resp);
                setIsLoading(false);
            }
            getData();
            }
        }, [ slug ])
        
        useEffect(()=> {
            dispatch(expandMonster( data ));
        }, [data]);

        return [ isLoading, data ];
    }

export default useMonsterApi;