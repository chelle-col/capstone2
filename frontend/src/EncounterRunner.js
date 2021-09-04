import { useState } from 'react';
import { useSelector } from 'react-redux';
import InitTracker from "./Components/RunnerComponents/InitTracker";

const EncounterRunner = () => {
    const encounter = useSelector( st => st.currentEncounter );
    const numberOf = useSelector( st => st.numberPlayers );
    const makePlayers = ( num ) => {
        let players = {};
        for( let i = 0; i < num; i++){
            const slug = `player${i}`;
            players[slug] = {
                name: `Player ${i + 1}`,
                'slug': slug,
                initiative: 0
            }
        }
        return players;
    }
    const INITIAL_ENCOUNTER = {
        ...makePlayers(numberOf),
        ...encounter
    };
    const [ encounterInfo, setEncounterInfo ] = useState(INITIAL_ENCOUNTER);
    const [ currentTurn, setCurrentTurn ] = useState(encounterInfo.player0);
    console.log(currentTurn);
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
                        <InitTracker 
                            encounter={encounterInfo} 
                            changeInitaitive={changeInitaitive} 
                            setTurn={setCurrentTurn}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EncounterRunner;