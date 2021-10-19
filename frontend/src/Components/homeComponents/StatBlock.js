
import { useState } from 'react';
import { logoPrimary } from '../../styles';
import { calcDifficulty, calcXp } from '../../helpers/helpers';
import Dropdown from '../formComponents/Dropdown';
import PartialListItem from '../listComponents/PartialListItem';
import NumListItem from '../listComponents/NumListItem';
import { useSelector, useDispatch } from 'react-redux';
import { changeNumberOfPlayers } from '../../redux/actionCreaters';

/** Displays the Stats of the Encounter
 * 
 *  @param encounter array of monsters
 */
const StatBlock = ({ encounter }) => {
    const dispatch = useDispatch();
    const monsterInfo = Object.values(encounter) || [];
    const numberOf = useSelector( st => st.numberPlayers);
    const totalXp = monsterInfo.reduce( ( acc, curr ) => acc + calcXp( curr.numberOf, curr.cr ), 0);

    // Raise # players to Redux level
    const [ players, setPlayers ] = useState(numberOf);
    const [ level, setLevel ] = useState(3);

    const nums = [1,2,3,4,5,6,7,8,9,10];
    const levels = [...nums, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const difficulty = calcDifficulty(players, level, totalXp);
    
    const handleClick = (num) => {
        dispatch(changeNumberOfPlayers(num));
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
                {monsterInfo && monsterInfo.map( m => <NumListItem key={m.slug} item={m}/>)}
                <div className='col'>
                    <PartialListItem items={['Total Experience: ', totalXp]}/>
                </div>
                <div className='col'>
                    <PartialListItem items={['Experience Per Player: ', totalXp/players]} />
                </div>
                <div className='row'>
                <div className={`col-4 bg-${difficulty.background} rounded m-2`} style={{color: difficulty.text}}>
                    <PartialListItem items={[difficulty.name]} />
                </div>
                </div>
            </div>
        </div>
    )
}

export default StatBlock;