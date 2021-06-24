import { useState } from "react";
import { Button } from 'reactstrap';

const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    const [ visible, setVisible ] = useState(false);

    const handleClick = () => {
        setVisible( !visible );
    };
    // Change to input group with invisible lable for accessability
    return (
        <>
            <Button className='mx-1 bg-primary' size='sm' onClick={handleClick}><i class="fas fa-search"></i></Button>
            { visible && <input 
                value={filterValue || ''}
                onChange={e => setFilter(e.target.value)}
            />}
        </>
        )
}

export default ColumnFilter;