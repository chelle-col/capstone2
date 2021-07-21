import PartialListItem from './PartialListItem';
import { Button } from 'reactstrap';

/** Displays single item with delete and click functions
 * 
 */
const EncouterListItem = ({ item, handleClick, handleDelete, isLoading }) => {
    return (
        <div className='container my-2'>
            <div className='row' data-id={`${item.id}`}>
                <PartialListItem items={[item.name, item.description, item.id]} />
                <Button disabled={isLoading} className='col-1 fas fa-edit mx-1' onClick={handleClick} ></Button>
                <Button disabled={isLoading} className='col-1 bg-danger fas fa-trash-alt mx-1' onClick={handleDelete} ></Button>
            </div>  
        </div>
    )
}

export default EncouterListItem;