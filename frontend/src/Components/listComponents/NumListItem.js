import PartialListItem from './PartialListItem';
import UpDownBox from './UpDownBox';
import { useDispatch } from 'react-redux';
import { changeNumOf, removeFromEncounter } from '../../redux/actionCreaters';
 
/** Combines partial list itme with up down box for encounter display
 * 
 */
const NumListItem = ({ item, forceUpdate }) => {
    const dispatch = useDispatch();

    const increase = ( ) => {
        dispatch(changeNumOf(item, item.numberOf + 1));
    }

    const decrease = ( ) => {
        if( item.numberOf - 1 === 0){
            dispatch(removeFromEncounter(item));
            forceUpdate();
        } else {
            dispatch(changeNumOf(item, item.numberOf - 1));
        }
    }

    return (
        <div className='container'>
            <div className='row bg-light rounded m-1'>
                <UpDownBox numberOf={item.numberOf} increase={increase} decrease={decrease}/>
                <PartialListItem items={[item.name, item.cr]} />
            </div>
        </div>
    )
}

export default NumListItem;