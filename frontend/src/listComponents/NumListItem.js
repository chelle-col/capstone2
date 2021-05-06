import PartialListItem from './PartialListItem';
import UpDownBox from './UpDownBox';
import { useDispatch } from 'react-router-dom';
import { changeNumOf } from '../redux/actionCreaters';
 
const NumListItem = ({ item }) => {
    const dispatch = useDispatch();

    const increase = ( ) => {
        dispatch(changeNumOf(item, item.numberOf + 1));
    }

    const decrease = ( ) => {
        dispatch(changeNumOf(item, item.numberOf - 1));
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