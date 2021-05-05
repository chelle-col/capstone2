import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const UserLanding = () => {

    const monsters = useSelector(st => st.monsters.monsters);
    const [ isloading, setIsLoading ] = useState(true);

    useEffect( () => {
        if(JSON.stringify(monsters) !== '{}' && monsters !== undefined ){
            console.log(JSON.stringify(monsters));
            setIsLoading(false);
        }
    }, [ monsters ])

    if( isloading ){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>UserLanding</h1>
            <ul>
                {Object.values(monsters).map( m => <li>{m.name}</li> )}
            </ul>
        </>
        )
}

export default UserLanding;