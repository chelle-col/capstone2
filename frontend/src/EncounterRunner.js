import { useState } from 'react';
import { useSelector } from 'react-redux';
import InitTracker from "./Components/RunnerComponents/InitTracker";

const EncounterRunner = () => {
    const encounter = useSelector( st => st.currentEncounter );
    const numberOf = useSelector( st => st.numberPlayers );
    const makePlayers = ( num ) => {
        let players = {};
        for( let i = 0; i < num; i++){
            players[`player${i + 1}`] = {
                name: `Player ${i + 1}`
            }
        }
        return players;
    }
    const INITIAL_ENCOUNTER = {
        ...useSelector(st => st.currentEncounter),
        ...makePlayers(numberOf)
    };

    const [ encounterInfo, setEncounterInfo ] = useState(INITIAL_ENCOUNTER);

    const changeInitaitive = ( name, initiative ) => {
        setEncounterInfo( encounterInfo => ({
            ...encounterInfo,
            [name]: {
                ...encounterInfo[name],
                initiative
            }
        }))
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row'> 
                    <div className='col-4 '> 
                        <InitTracker encounter={encounterInfo} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EncounterRunner;