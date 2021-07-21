import MonsterList from './Components/homeComponents/MonsterList';
import EncounterDisplay from './Components/homeComponents/EncounterDisplay';
// import useIsStateLoaded from './hooks/useIsStateLoaded';

/** Home Page: Displays the monsters and current encounter
 * 
 * @param {boolean} param0 
 * @returns 
 */
const Home = ({ hasUser }) => {

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 mx-3'>
                        <EncounterDisplay hasUser={hasUser} />
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