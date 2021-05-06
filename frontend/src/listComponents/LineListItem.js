
import { useHistory } from 'react-router';
import { Button } from 'reactstrap';
import PartialListItem from './PartialListItem';
import { useDispatch } from 'react-redux';
import { addToCurrentEncounter } from '../redux/actionCreaters';

const LineListItem = ({ item }) =>{
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleClick = () => {
        dispatch(addToCurrentEncounter(item));
    }

    const handleLink = () => {
        history.push(`/${item.slug}`)
    }

    return (
        <div className='container my-2'>
            <div className='row'>
                <Button onClick={handleClick}>+</Button>
                <PartialListItem items={[item.name, item.cr, item.size, item.type]} />
                <Button onClick={handleLink}>See Details</Button>
            </div>
        </div>
    )
}

export default LineListItem;