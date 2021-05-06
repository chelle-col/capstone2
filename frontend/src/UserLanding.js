import MonsterList from './listComponents/MonsterList';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import EncounterDisplay from './homeComponents/EncounterDisplay';

const UserLanding = () => {

    const monsters = useSelector(st => st.monsters.monsters);
    const encounter = useSelector(st => st.currentEncounter);
    const [ isloading, setIsLoading ] = useState(true);

    useEffect( () => {
        if(JSON.stringify(monsters) !== '{}' && monsters !== undefined ){
            setIsLoading(false);
        }
    }, [ monsters ])

    return (
        <>
            <h1>UserLanding</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-3 mx-3'>
                        <EncounterDisplay encounter={encounter} />
                    </div>
                    <div className='col mx-3'>
                        <MonsterList isloading={isloading} monsters={monsters} />
                    </div>
                </div>
            </div>
        </>
        )
}

export default UserLanding;