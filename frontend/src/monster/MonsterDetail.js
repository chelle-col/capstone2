import { useParams } from 'react-router-dom';
import useMonsterApi from '../api/useMonsterApi';
import StatBlock from './StatBlock';

const MonsterDetail = () => {
    const { monster } = useParams();
    const [ isLoading, monsterInfo ] = useMonsterApi(monster);

    if(isLoading){
       return <h1>Loading...</h1>
    }

    const statInfo = {'strength': monsterInfo.strength,
                        'dexterity': monsterInfo.dexterity,
                        'intelligence': monsterInfo.intelligence,
                        'wisdom': monsterInfo.wisdom,
                        'charisma': monsterInfo.charisma}

    return (
        <div className='container'>
            <div className='row'>
                <h1>{monsterInfo.name}</h1>
        </div>
        <StatBlock stats={statInfo} />
        </div>
        )
}

export default MonsterDetail;