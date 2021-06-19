import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

/** Shows if a given part of state is loaded
 * 
 */
const useIsStateLoaded = ( state ) => {
    const selectedState = useSelector(st => st[state]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () => {
        if(JSON.stringify(selectedState) !== '{}' && selectedState !== undefined ){
            setIsLoading(false);
        }
    }, [ selectedState ]);

    return [ selectedState, isLoading ];
}

export default useIsStateLoaded;