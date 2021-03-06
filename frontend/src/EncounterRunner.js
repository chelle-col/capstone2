import { useState } from 'react';
import { useSelector } from 'react-redux';
import CurrentTurn from './Components/RunnerComponents/CurrentTurn';
import InitTracker from "./Components/RunnerComponents/InitTracker";
import { INITIATIVE, IS_ACTIVE } from './Components/RunnerComponents/names';
import AddTo from './Components/RunnerComponents/AddTo';
import { useDispatch } from 'react-redux';
import { changeNumOf } from './redux/actionCreaters';
import { makePlayersFromNum, makeMonstersFromArray } from './Components/RunnerComponents/helperFuctions';

const EncounterRunner = () => {
    // TODO: 
    // dropdown on home page goes underneath site logo
    // option to use one initiative for all monsters
    const encounter = useSelector( st => st.currentEncounter );
    const numberOf = useSelector( st => st.numberPlayers );

    const dispatch = useDispatch();

    const INITIAL_ENCOUNTER = {
        ...makePlayersFromNum(numberOf),
        ...makeMonstersFromArray(Object.values(encounter))
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

    const [ currentTurn, setCurrentTurn ] = useState(
        encounterInfo.player_0
    );

    const setTurn = ( turn ) => {
        turn[IS_ACTIVE] = true;
        encounterInfo[currentTurn.slug][IS_ACTIVE] = false;
        setCurrentTurn(turn);
    }
    
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
                            setTurn={setTurn}
                            />
                    </div>
                    <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5'>
                        <CurrentTurn
                            turn={currentTurn}
                            encounter={encounterInfo}
                            setProperties={setMonsterProperties}
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