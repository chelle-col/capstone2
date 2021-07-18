import { useParams } from 'react-router-dom';
import useMonsterApi from '../api/useMonsterApi';
import StatBlock from './MonsterStatBlock';
import Actions from './Actions';
import Reactions from './Reactions';
import LegendaryActions from './LegendaryActions';
import SpecialAbilites from './SpecialAbilites';

/** Displays the info from api about monster
 * 
 */
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

    console.log(monsterInfo);

    // Saving Throws
    // Skills
    // Senses
    // Languages
    // Challenge Rating
    // Damges Resistances
    // Damage Imunites
    // Damage Vulnerablites
    // Condition Imunites
    return (
        <div className='container'>
            <h1>{monsterInfo.name}</h1>
            <h3>{monsterInfo.size} {monsterInfo.type}{monsterInfo.subtype}, {monsterInfo.alignment}</h3>
            <p>Armor Class: {monsterInfo.armor_class} ({monsterInfo.armor_desc})</p>
            <p>Hit Points: {monsterInfo.hit_points}</p>
            <p>Speed: {monsterInfo.speed.walk} ft</p>
            <StatBlock stats={statInfo} />
            <SpecialAbilites abilities={monsterInfo.special_abilities} />
            <Actions actions={monsterInfo.actions} />
            {monsterInfo.reactions && <Reactions reactions={monsterInfo.reactions} />}
            {monsterInfo.legendary_actions && <LegendaryActions desc={monsterInfo.legendary_desc} actions={monsterInfo.legendary_actions} />}
        </div>
        )
}

export default MonsterDetail;