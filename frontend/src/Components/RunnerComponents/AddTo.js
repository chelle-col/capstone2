import AddToItem from "./AddToItem";

const AddTo = ({ encounter, addToEncounter }) => {
    
    return (
        <>
            <h2>Add To</h2>
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