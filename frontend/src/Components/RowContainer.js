

const RowContainer = ({ children }) => {
    const isReal = c => c !== undefined && c !== null && c !== false;
    const realChildren = typeof children === typeof [] 
        ? children.filter( c => isReal(c) ) 
        : [children];
    return(
        <div className='container-fluid'>
            <div className='row'>
                {realChildren.map( (c, idx) => (
                    <div key={idx} className='col'>
                        {c}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RowContainer;