import { useParams } from 'react-router-dom';
import useMonsterApi from '../api/useMonsterApi';
import StatBlock from './MonsterStatBlock';
import Actions from './Actions';
import Reactions from './Reactions';
import LegendaryActions from './LegendaryActions';
import SpecialAbilites from './SpecialAbilites';
import MiscInfo  from './MiscInfo';
import ArmorClass from './ArmorClass';
import PartialInfo from './PartialInfo';
import Speed from './Speed';
import Skills from './Skills';
import SavingThrows from './SavingThrows';
import Loading from '../Loading';

/** Displays the info from api about monster
 * 
 */
const MonsterDetail = () => {
    const { monster } = useParams();
    const [ isLoading, monsterInfo ] = useMonsterApi(monster);

    if(isLoading){
       return <Loading />
    }

    const statInfo = {'strength': monsterInfo.strength,
                        'dexterity': monsterInfo.dexterity,
                        'intelligence': monsterInfo.intelligence,
                        'wisdom': monsterInfo.wisdom,
                        'charisma': monsterInfo.charisma}

    // console.log(monsterInfo);

    return (
        <div className='container'>
            <h1>{monsterInfo.name}</h1>
            <h3>{monsterInfo.size} {monsterInfo.type}{monsterInfo.subtype && ` (${monsterInfo.subtype})`}, {monsterInfo.alignment}</h3>
            <ArmorClass armorClass={monsterInfo.armor_class} desc={monsterInfo.armor_desc} />
            <PartialInfo name='Hit Points' info={`${monsterInfo.hit_points} (${monsterInfo.hit_dice})`}/>
            <Speed speed={monsterInfo.speed} />
            <StatBlock stats={statInfo} />
            <SavingThrows info={monsterInfo} stats={statInfo}/>
            <MiscInfo info={monsterInfo}/>
            <Skills skills={monsterInfo.skills} />
            <SpecialAbilites abilities={monsterInfo.special_abilities} />
            <Actions actions={monsterInfo.actions} />
            {monsterInfo.reactions && <Reactions reactions={monsterInfo.reactions} />}
            {monsterInfo.legendary_actions && <LegendaryActions desc={monsterInfo.legendary_desc} actions={monsterInfo.legendary_actions} />}
        </div>
        )
}

export default MonsterDetail;