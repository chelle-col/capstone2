import { useParams } from 'react-router-dom';
import useMonsterApi from './api/useMonsterApi';
import StatBlock from './Components/monster/MonsterStatBlock';
import Actions from './Components/monster/Actions';
import Reactions from './Components/monster/Reactions';
import LegendaryActions from './Components/monster/LegendaryActions';
import SpecialAbilites from './Components/monster/SpecialAbilites';
import MiscInfo  from './Components/monster/MiscInfo';
import ArmorClass from './Components/monster/ArmorClass';
import PartialInfo from './Components/monster/PartialInfo';
import Speed from './Components/monster/Speed';
import Skills from './Components/monster/Skills';
import SavingThrows from './Components/monster/SavingThrows';
import Loading from './Loading';

/** Displays the info from api about monster
 * 
 */
const MonsterDetail = ({ monsterName }) => {
    const { monster : paramMonster } = useParams();
    const monster = monsterName ? monsterName : paramMonster;
    const [ isLoading, monsterInfo ] = useMonsterApi(monster);

    if(isLoading){
       return <Loading />
    }

    const statInfo = {'strength': monsterInfo.strength,
                        'dexterity': monsterInfo.dexterity,
                        'intelligence': monsterInfo.intelligence,
                        'wisdom': monsterInfo.wisdom,
                        'charisma': monsterInfo.charisma}


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