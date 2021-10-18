import { useState } from 'react';
import { useSelector } from 'react-redux';
import CurrentTurn from './Components/RunnerComponents/CurrentTurn';
import InitTracker from "./Components/RunnerComponents/InitTracker";
import { INITIATIVE } from './Components/RunnerComponents/names';

const EncounterRunner = () => {
    // TODO: 
    // add way to remove => trash can icon turn on removal with grayed out items
    // add third column for adding monsters
    // TODO add delete action to table and button inside InitTracker
    // TODO after putting monsters in state need to add dex bounus to roll in InitItem
    const encounter = useSelector( st => st.currentEncounter );
    const numberOf = useSelector( st => st.numberPlayers );
    const makePlayers = ( num ) => {
        let players = {};
        for( let i = 0; i < num; i++){
            const slug = `player_${i}`;
            players[slug] = {
                name: `Player ${i + 1}`,
                'slug': slug,
                [INITIATIVE]: 0
            }
        }
        return players;
    };

    const makeMonsters = (monsterArray) =>{
        let monsters = {};
        // Loop over array
        for( const m in monsterArray){
           // Add each monster to the object
           // For any that have more than one
           // Add each with their own slug
            for(let idx = 0; idx < monsterArray[m].numberOf; idx++){
                let newSlug = monsterArray[m].slug + "_" + idx;
                monsters[newSlug] = {
                    ...monsterArray[m],
                    slug : newSlug,
                    [INITIATIVE] : 0
                }
            }
        }
        return monsters;
    };

    const INITIAL_ENCOUNTER = {
        ...makePlayers(numberOf),
        ...makeMonsters(Object.values(encounter))
    };

    const [ encounterInfo, setEncounterInfo ] = useState(INITIAL_ENCOUNTER);

    const deleteMonster = (slug) => {
        const copyEncounterInfo = encounterInfo;
        delete copyEncounterInfo[slug];
        setEncounterInfo(...copyEncounterInfo);
    }
    const setMonsterProperties = (slug, prop, value) => {
        setEncounterInfo(encounterInfo=>({
            ...encounterInfo,
            [slug]:{
                ...encounterInfo[slug],
                [prop]: value
            }
        }))
    }

    const [ currentTurn, setCurrentTurn ] = useState(encounterInfo.player_0);
    
    return (
        <>
            <div className='container-fluid'>
                <div className='row'> 
                    <div className='col-4 '> 
                        <InitTracker 
                            setMonsterInitiative={setMonsterProperties}
                            deleteMonster={deleteMonster}
                            encounter={encounterInfo} 
                            setTurn={setCurrentTurn}/>
                    </div>
                    <div className='col-4'>
                        <CurrentTurn
                            turn={currentTurn}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EncounterRunner;