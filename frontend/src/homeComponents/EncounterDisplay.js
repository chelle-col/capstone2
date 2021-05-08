import NumListItem from '../listComponents/NumListItem';
import PartialListItem from '../listComponents/PartialListItem';
import { calcXp } from '../helpers';
import useForceUpdate from '../hooks/useForceUpdate';

const EncounterDisplay = ({ encounter }) => {
    const monsterInfo = Object.values(encounter);
    const totalXp = monsterInfo.reduce( ( acc, curr ) => acc + calcXp( curr.numberOf, curr.cr ), 0);
    
    const forceUpdate = useForceUpdate();

    return (
        <>
            <h1>Encounter</h1>
            <div className='container'>
                <div className='row'>
                <PartialListItem items={[ ' ', 'Name', "CR"]}/>
                </div>
                <div className='row'>
                {monsterInfo.map( m => <NumListItem key={m.slug} item={m} update={forceUpdate}/>)}
                <PartialListItem items={['Total Experience: ', totalXp]}/>
                </div>
            </div>
        </>
        )
}

export default EncounterDisplay;