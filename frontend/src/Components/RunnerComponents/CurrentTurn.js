import MonsterDetail from '../../MonsterDetail';
import { PLAYER } from './names';

const CurrentTurn = ({ turn }) => {
    if(!turn){
        return <h1>Empty Initiaitve</h1>
    }
    const isPlayer = turn.slug.includes(PLAYER);
    return (
        <>
            <h1>CurrentTurn</h1>
            {isPlayer && <h2>{turn.name}</h2>}
            {!isPlayer && <MonsterDetail monsterName={turn.slug.split('_')[0]}/>}
        </>
    )
}

export default CurrentTurn;