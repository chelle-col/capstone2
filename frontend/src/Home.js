import MonsterList from './listComponents/MonsterList';
import { useSelector } from 'react-redux';
import EncounterDisplay from './homeComponents/EncounterDisplay';
import useIsStateLoaded from './hooks/useIsStateLoaded';

const UserLanding = ({ hasUser }) => {

    const [ monsters, isLoading ] = useIsStateLoaded('monsters');
    const encounter = useSelector(st => st.currentEncounter);

    if( isLoading ){
        return <h2>Loading...</h2>
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 mx-3'>
                        <EncounterDisplay hasUser={hasUser} encounter={encounter} />
                    </div>
                    <div className='col mx-3'>
                        <MonsterList isloading={isLoading} monsters={monsters} />
                    </div>
                </div>
            </div>
        </>
        )
}

export default UserLanding;