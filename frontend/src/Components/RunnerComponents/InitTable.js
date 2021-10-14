import InitItem from './InitItem';

const InitTable = ({ encounterArray, changeInitaitive, obj }) => {

    return (
        <>
            {Object.values(encounterArray).map( i => 
                <InitItem 
                    key={i.slug} 
                    item={i} 
                    changeInitaitive={changeInitaitive}
                    obj={obj[i.slug]}
                    />
                )}
        </>
    )
}

export default InitTable;