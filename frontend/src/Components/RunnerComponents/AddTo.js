import AddToItem from "./AddToComps/AddToItem";
import Header from './Header';

const AddTo = ({ encounter, addToEncounter }) => {
    
    return (
        <>
            <Header title='Add On'/>
            {encounter.map( (i, idx) => 
                <AddToItem 
                    key={idx} 
                    item={i} 
                    addToEncounter={addToEncounter}
                />
            )}
        </>
    )
}

export default AddTo;