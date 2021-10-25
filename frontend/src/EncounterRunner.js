import { useState } from 'react';
import { useSelector } from 'react-redux';
import CurrentTurn from './Components/RunnerComponents/CurrentTurn';
import InitTracker from "./Components/RunnerComponents/InitTracker";
import { INITIATIVE } from './Components/RunnerComponents/names';
import AddTo from './Components/RunnerComponents/AddTo';
import { useDispatch } from 'react-redux';
import { changeNumOf } from './redux/actionCreaters';

const EncounterRunner = () => {
    // TODO: 
    // TODO after putting monsters in state need to add dex bounus to roll in InitItem
    // move makePlayers and makeMonsters into own file
    // dropdown on home page goes underneath site logo
    // option to use one initiative for all monsters
    // hit point tracking
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

    const dispatch = useDispatch();

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
        setEncounterInfo(()=>({...copyEncounterInfo}));
    };

    const setMonsterProperties = (slug, prop, value) => {
        setEncounterInfo(encounterInfo=>({
            ...encounterInfo,
            [slug]:{
                ...encounterInfo[slug],
                [prop]: value
            }
        }))
    };

    const [ currentTurn, setCurrentTurn ] = useState(encounterInfo.player_0);
    
    const addToEncounter = (slug) => {
        const bareSlug = slug.split("_")[0];
        const item = encounter[bareSlug];
        const newSlug = bareSlug + '_' + (item.numberOf + 1);
        // add one to the encounter in redux
        dispatch(changeNumOf(item, item.numberOf + 1));
        // add to the encounterInfo
        const copyEncounterInfo = {
            ...encounterInfo,
            [newSlug]:{
                ...item,
                slug: newSlug,
                 [INITIATIVE]: 0
            }
        }
        setEncounterInfo({...copyEncounterInfo});
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row'> 
                    <div className='col-12 col-sm-12 col-md-5 col-lg col-xl'> 
                        <InitTracker 
                            setMonsterInitiative={setMonsterProperties}
                            deleteMonster={deleteMonster}
                            encounter={encounterInfo} 
                            setTurn={setCurrentTurn}
                            />
                    </div>
                    <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5'>
                        <CurrentTurn
                            turn={currentTurn}
                        />
                    </div>
                    <div className='col-12 col-sm-12 col-md col-lg col-xl'>
                        <AddTo 
                            encounter={Object.values(encounter)}
                            addToEncounter={addToEncounter}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EncounterRunner;