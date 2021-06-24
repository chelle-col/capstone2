
import useForceUpdate from '../hooks/useForceUpdate';
import { useState } from 'react';
import { logoPrimary } from '../styles';
import { calcDifficulty, calcXp, getColor, getTextColor } from '../helpers/helpers';
import Dropdown from '../formComponents/Dropdown';
import PartialListItem from '../listComponents/PartialListItem';
import NumListItem from '../listComponents/NumListItem';

/** Displays the Stats of the Encounter
 * 
 *  @param encounter array of monsters
 */
const StatBlock = ({ encounter }) => {
    const monsterInfo = Object.values(encounter) || [];
    console.log(encounter);
    console.log(monsterInfo);
    const totalXp = monsterInfo.reduce( ( acc, curr ) => acc + calcXp( curr.numberOf, curr.cr ), 0);
    const forceUpdate = useForceUpdate();

    const [ players, setPlayers ] = useState(4);
    const [ level, setLevel ] = useState(3);

    const nums = [1,2,3,4,5,6,7,8,9,10];
    const levels = [...nums, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const difficulty = calcDifficulty(players, level, totalXp);
    
    const handleClick = (num) => {
        setPlayers(num);
    }

    const handleLevel = num => {
        setLevel(num);
    }

    return (
        <div className='container rounded p-2' style={{background: logoPrimary}}>
                <div className='row'>
                    <div className='col'>
                        <Dropdown 
                            header={`Number of Players: ${players}`} 
                            actions={nums} 
                            handleClick={handleClick} 
                            size='sm'/>
                        <Dropdown 
                            header={`Player Level: ${level}`} 
                            actions={levels} 
                            handleClick={handleLevel} 
                            size='sm'/>
                    </div>
                </div>
                <div className='row'>
                <PartialListItem items={[ ' ', 'Name', "CR"]}/>
                </div>
                <div className='row'>
                {monsterInfo && monsterInfo.map( m => <NumListItem key={m.slug} item={m} forceUpdate={forceUpdate}/>)}
                <div className='col'>
                    <PartialListItem items={['Total Experience: ', totalXp]}/>
                </div>
                <div className='col'>
                    <PartialListItem items={['Experience Per Player: ', totalXp/players]} />
                </div>
                <div className='row'>
                <div className={`col-4 bg-${getColor(difficulty)} rounded m-2`} style={{color: getTextColor(difficulty)}}>
                    <PartialListItem items={[difficulty]} />
                </div>
                </div>
            </div>
        </div>
    )
}

export default StatBlock;