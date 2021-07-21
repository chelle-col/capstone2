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
                    <div className='col-sm col col-md-3 col-lg-3 col-xl-3 m-3'>
                        <EncounterDisplay hasUser={hasUser} />
                    </div>
                    <div className='m-xs-4 col'>
                        <MonsterList />
                    </div>
                </div>
            </div>
        </>
        )
}

export default Home;