import MonsterDetail from '../../MonsterDetail';
import { PLAYER } from './names';
import Header from './Header';

const CurrentTurn = ({ turn }) => {
    // Add Hit Point and AC tracker to top
    if(!turn){
        return <h2>Empty Initiaitve</h2>
    }
    const isPlayer = turn.slug.includes(PLAYER);
    return (
        <>
            <Header title='Current Turn'/>
            {isPlayer && <h3>{turn.name}</h3>}
            {!isPlayer && <MonsterDetail monsterName={turn.slug.split('_')[0]}/>}
        </>
    )
}

export default CurrentTurn;