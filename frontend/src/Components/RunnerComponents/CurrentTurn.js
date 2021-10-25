import MonsterDetail from '../../MonsterDetail';
import { PLAYER } from './names';
import Header from './Header';
import EditableStatBlock from './CurrentTurnComps/EditableStatBlock';

const CurrentTurn = ({ turn }) => {
    // Add Hit Point and AC tracker to top
    const bareSlug = turn.slug.split('_')[0];
    if(!turn){
        return <h2>Empty Initiaitve</h2>
    }
    const isPlayer = turn.slug.includes(PLAYER);
    return (
        <>
            <Header title='Current Turn'/>
            <EditableStatBlock name={bareSlug} />
            {isPlayer && <h3>{turn.name}</h3>}
            {!isPlayer && <MonsterDetail monsterName={bareSlug}/>}
        </>
    )
}

export default CurrentTurn;