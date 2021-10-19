import { Button } from "reactstrap";


const AddToItem = ({ item, addToEncounter }) => {

    const handleClick = () => {
        addToEncounter(item.slug);
    }
    return (
        <>
            <div className='container-fluid my-1 p-1'>
                <div className='row'>
                    <h3 className='col'>{item.name}</h3>
                    <Button 
                        color='danger' 
                        className='col-1'
                        onClick={handleClick}
                        size='sm'
                        >
                            <i className="fas fa-plus-square"></i>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default AddToItem;