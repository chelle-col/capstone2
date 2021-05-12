

import NumListItem from '../listComponents/NumListItem';
import PartialListItem from '../listComponents/PartialListItem';
import { calcXp } from '../helpers';
import useForceUpdate from '../hooks/useForceUpdate';
import Dropdown from '../formComponents/Dropdown';
import { useState } from 'react';
import { Button } from 'reactstrap';
import { logoPrimary, logoSecondary } from '../styles';

const EncounterDisplay = ({ encounter, hasUser }) => {
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
            <div className='container rounded p-2' style={{background: logoPrimary}}>
                <div className='row'>
                    <div className='col'>
                        <Dropdown header={'Num Players'} actions={nums} handleClick={handleClick} size='sm'/>
                    </div>
                    <div className='col m-2 pl-2 text-center'>{players}</div>
                </div>
                <div className='row'>
                <PartialListItem items={[ ' ', 'Name', "CR"]}/>
                </div>
                <div className='row'>
                {monsterInfo.map( m => <NumListItem key={m.slug} item={m} update={forceUpdate}/>)}
                <div className='col'>
                    <PartialListItem items={['Total Experience: ', totalXp]}/>
                </div>
                <div className='col'>
                    <PartialListItem items={['Experience Per Player: ', totalXp/players]} />
                </div>
                </div>
                {hasUser && <div className='row'>
                    <Button style={{background: logoSecondary}}>Save</Button>
                </div>}
            </div>
        </>
        )
}

export default EncounterDisplay;