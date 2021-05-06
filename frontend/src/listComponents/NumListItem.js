import PartialListItem from './PartialListItem';
import UpDownBox from './UpDownBox';
import { useDispatch } from 'react-redux';
import { changeNumOf, removeFromEncounter } from '../redux/actionCreaters';
 
const NumListItem = ({ item }) => {
    const dispatch = useDispatch();

    const increase = ( ) => {
        dispatch(changeNumOf(item, item.numberOf + 1));
    }

    const decrease = ( ) => {
        if( item.numberOf - 1 === 0){
            dispatch(removeFromEncounter(item));
        } else {
            dispatch(changeNumOf(item, item.numberOf - 1));
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <UpDownBox numberOf={item.numberOf} increase={increase} decrease={decrease}/>
                <PartialListItem items={[item.name, item.cr]} />
            </div>
        </div>
    )
}

export default NumListItem;