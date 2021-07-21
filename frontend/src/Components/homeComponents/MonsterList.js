import Loading from '../Loading';
import ETTable from './Table';
import useIsStateLoaded from '../hooks/useIsStateLoaded';
import { useDispatch } from 'react-redux';
import { addToCurrentEncounter } from '../redux/actionCreaters';
import { useHistory } from 'react-router';

/** Shows the list of monsters
 *  Handle pagination
 */
const MonsterList = () => {
    const [ monsters, isLoading ] = useIsStateLoaded('monsters');
    const dispatch = useDispatch();
    const history = useHistory();

    while(isLoading){
        return <Loading/>
    }

    const handleClick = item => {
        dispatch(addToCurrentEncounter(item));
    }

    const handleNavigation = slug => {
        history.push(`/monster/${slug}`)
    }

    return (
        <> 
            <ETTable data={monsters} handleClick={handleClick} handleNavigation={handleNavigation} />
        </>
    )
}

export default MonsterList;