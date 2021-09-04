import InitItem from './InitItem';

const InitTable = ({ encounterArray, changeInitaitive }) => {

    return (
        <>
            {Object.values(encounterArray).map( i => 
                <InitItem key={i.slug} item={i} changeInitaitive={changeInitaitive}/>
                )}
        </>
    )
}

export default InitTable;