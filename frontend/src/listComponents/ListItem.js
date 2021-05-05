
import { useHistory } from 'react-router';
import { Button } from 'reactstrap';

const ListItem = ({ item }) =>{
    const history = useHistory();
    const handleClick = () => {
        console.log('clikced')
    }

    const handleLink = () => {
        history.push(`/${item.slug}`)
    }

    return (
        <div className='container'>
            <div className='row'>
            <Button onClick={handleClick}>+</Button>
            <div className='col-2'>{item.name}</div>
            <div className='col-2'>{item.cr}</div>
            <div className='col-2'>{item.type}</div>
            <Button onClick={handleLink}>See Details</Button>
            </div>
        </div>
    )
}

export default ListItem;