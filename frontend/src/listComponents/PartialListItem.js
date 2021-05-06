
const PartialListItem = ({ items=[] }) => {
    
    return(
        <>
        {items.map( (i, idx) => <div key={idx} className='col-2'>{i}</div>)}
        </>
    )
}

export default PartialListItem;