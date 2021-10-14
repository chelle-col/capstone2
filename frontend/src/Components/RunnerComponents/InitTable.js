import InitItem from './InitItem';

const InitTable = ({ encounterArray, obj }) => {
    return (
        <>
            {Object.values(encounterArray).map( i => 
                <InitItem 
                    key={i.slug} 
                    item={i} 
                    obj={obj[i.slug]}
                    />
                )}
        </>
    )
}

export default InitTable;