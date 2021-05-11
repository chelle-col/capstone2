import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useIsStateLoaded = ( state ) => {
    const selectedState = useSelector(st => st[state]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () => {
        if(JSON.stringify(state) !== '{}' && selectedState !== undefined ){
            setIsLoading(false);
        }
    }, [ selectedState ]);

    return [ selectedState, isLoading ];
}

export default useIsStateLoaded;