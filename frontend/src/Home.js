import MonsterList from './homeComponents/MonsterList';
import { useSelector } from 'react-redux';
import EncounterDisplay from './homeComponents/EncounterDisplay';
// import useIsStateLoaded from './hooks/useIsStateLoaded';

/** Home Page: Displays the monsters and current encounter
 * 
 * @param {boolean} param0 
 * @returns 
 */
const Home = ({ hasUser }) => {

    const encounter = useSelector(st => st.currentEncounter);

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 mx-3'>
                        <EncounterDisplay hasUser={hasUser} encounter={encounter} />
                    </div>
                    <div className='col mx-3'>
                        <MonsterList />
                    </div>
                </div>
            </div>
        </>
        )
}

export default Home;