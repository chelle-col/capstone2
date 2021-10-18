import InitItem from './InitItem';

const InitTable = ({ deleteMonster, setMonsterInitiative, encounterArray, obj }) => {
    
    return (
        <>
            {Object.values(encounterArray).map( i => 
                <InitItem 
                    key={i.slug} 
                    item={i} 
                    setMonsterInitiative={setMonsterInitiative}
                    obj={obj[i.slug]}
                    />
                )}
        </>
    )
}

export default InitTable;