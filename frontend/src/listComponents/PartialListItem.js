
const PartialListItem = ({ items=[] }) => {
    
    return(
        <>
        {items.map( (i, idx) => <div key={idx} className='col'>{i}</div>)}
        </>
    )
}

export default PartialListItem;