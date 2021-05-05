import MonsterList from './listComponents/MonsterList';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const UserLanding = () => {

    const monsters = useSelector(st => st.monsters.monsters);
    const [ isloading, setIsLoading ] = useState(true);

    useEffect( () => {
        if(JSON.stringify(monsters) !== '{}' && monsters !== undefined ){
            setIsLoading(false);
        }
    }, [ monsters ])

    return (
        <>
            <h1>UserLanding</h1>
            <MonsterList isloading={isloading} monsters={monsters} />
        </>
        )
}

export default UserLanding;