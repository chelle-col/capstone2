import MonsterDetail from '../../MonsterDetail';
import { PLAYER } from './names';

const CurrentTurn = ({ turn }) => {
    const isPlayer = turn.slug.includes(PLAYER);
    return (
        <>
            <h1>CurrentTurn</h1>
            {isPlayer && <h2>{turn.name}</h2>}
            {!isPlayer && <MonsterDetail monsterName={turn.slug.spliy('_')[0]}/>}
        </>
    )
}

export default CurrentTurn;