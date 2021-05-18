import MonsterList from './homeComponents/MonsterList';
import { useSelector } from 'react-redux';
import EncounterDisplay from './homeComponents/EncounterDisplay';
import useIsStateLoaded from './hooks/useIsStateLoaded';

const Home = ({ hasUser }) => {

    const encounter = useSelector(st => st.currentEncounter);
    let [ monsters, isLoading ] = useIsStateLoaded('monsters');

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 mx-3'>
                        <EncounterDisplay hasUser={hasUser} encounter={encounter} />
                    </div>
                    <div className='col mx-3'>
                        <MonsterList isLoading={isLoading} monsters={monsters} />
                    </div>
                </div>
            </div>
        </>
        )
}

export default Home;