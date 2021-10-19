import MonsterDetail from '../../MonsterDetail';
import { PLAYER } from './names';

const CurrentTurn = ({ turn }) => {
    if(!turn){
        return <h2>Empty Initiaitve</h2>
    }
    const isPlayer = turn.slug.includes(PLAYER);
    return (
        <>
            <h2>CurrentTurn</h2>
            {isPlayer && <h3>{turn.name}</h3>}
            {!isPlayer && <MonsterDetail monsterName={turn.slug.split('_')[0]}/>}
        </>
    )
}

export default CurrentTurn;