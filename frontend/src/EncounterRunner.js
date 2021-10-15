import { useState } from 'react';
import { useSelector } from 'react-redux';
import InitTracker from "./Components/RunnerComponents/InitTracker";
import { INITIATIVE } from './Components/RunnerComponents/names';

const EncounterRunner = () => {
    // TODO: 
    // add slots for multi monsters
    // add way to remove => trash can icon turn on removal with grayed out items
    // add MonsterInfo for current monster
    // add third column for adding monsters
    const encounter = useSelector( st => st.currentEncounter );
    const numberOf = useSelector( st => st.numberPlayers );
    const makePlayers = ( num ) => {
        let players = {};
        for( let i = 0; i < num; i++){
            const slug = `player${i}`;
            players[slug] = {
                name: `Player ${i + 1}`,
                'slug': slug,
                [INITIATIVE]: 0
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
    return (
        <>
            <div className='container-fluid'>
                <div className='row'> 
                    <div className='col-4 '> 
                        <InitTracker 
                            encounter={encounterInfo} 
                            setTurn={setCurrentTurn}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EncounterRunner;