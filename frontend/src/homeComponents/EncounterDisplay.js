

import NumListItem from '../listComponents/NumListItem';
import PartialListItem from '../listComponents/PartialListItem';
import { calcXp } from '../helpers';
import useForceUpdate from '../hooks/useForceUpdate';
import Dropdown from '../formComponents/Dropdown';
import { useState } from 'react';

const EncounterDisplay = ({ encounter }) => {
    const monsterInfo = Object.values(encounter);
    const [ players, setPlayers ] = useState(4);
    const totalXp = monsterInfo.reduce( ( acc, curr ) => acc + calcXp( curr.numberOf, curr.cr ), 0);
    
    const forceUpdate = useForceUpdate();

    const nums = [1,2,3,4,5,6,7,8,9,10];
    const handleClick = (num) => {
        setPlayers(num);
    }

    return (
        <>
            <h1>Encounter</h1>
            <div className='container'>
                <div className='row'>
                    <Dropdown header={'Num Players'} actions={nums} handleClick={handleClick} size='sm'/>
                    <div className='m-2 pl-2 text-center'>{players}</div>
                </div>
                <div className='row'>
                <PartialListItem items={[ ' ', 'Name', "CR"]}/>
                </div>
                <div className='row'>
                {monsterInfo.map( m => <NumListItem key={m.slug} item={m} update={forceUpdate}/>)}
                <PartialListItem items={['Total Experience: ', totalXp]}/>
                <PartialListItem items={['Experience Per Player: ', totalXp/players]} />
                </div>
            </div>
        </>
        )
}

export default EncounterDisplay;