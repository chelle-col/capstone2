import InitTable from "./InitTable";
import { Button } from 'reactstrap';
import { useEffect, useState } from "react";

const InitTracker = ({ setMonsterInitiative, deleteMonster, encounter, setTurn }) => {

    const [ isDeleting, setIsDeleting ] = useState(false);
    const sortIntoArry = obj => {
       return Object.values(obj).map(
            m => ({name: m.name, slug:m.slug, initiative: m.initiative || 0}
                )
            ).sort(compareCreatures)
    };
    
    const compareCreatures = (a, b) => {
        if(a.initiative < b.initiative){
            return 1;
        }else if (a.initiative > b.initiative){
            return -1;
        }else{
            return 0;
        }
    };

    const buildEncounterObj = encounter => {
        const encounterObject = {
            ...encounter,
            encounterArray : Object.values(encounter).map(
                m => ({name: m.name, slug:m.slug, initiative: m.initiative || 0}
                    )
                )
        };
        return encounterObject;
    };
   
    const [ encounterObj, setEncounterObj ] = 
        useState(buildEncounterObj(encounter));
    
    useEffect(() => {
        setEncounterObj(buildEncounterObj(encounter));
    }, [encounter]);

    const advanceTurn = () => {
        setEncounterObj( (encounterObj) => ({
            ...encounterObj,
            encounterArray: [...encounterObj.encounterArray.slice(1), 
                ...encounterObj.encounterArray.slice(0, 1)]}));
        setTurn(encounterObj.encounterArray[1]);
    };

    const handleDelete = () => {
        setIsDeleting(isDeleting => !isDeleting);
    }

    const sort = () => {
        setEncounterObj( (encounterObj) => ({
            ...encounterObj,
            encounterArray: sortIntoArry(encounter)})
            );
    };

    // When encounterObj changes we can change the turn
    useEffect(()=>{
        setTurn(encounterObj.encounterArray[0]);
    },[encounterObj]);

    const removeTurn = (slug) => {
        let copyEncounterObj = {
            ...encounterObj,
            encounterArray: encounterObj.encounterArray.filter(i=> i.slug != slug)
        };
        setEncounterObj( () => ({...copyEncounterObj}));
        deleteMonster(slug);
    };

    return (
        <>
            <Button className='m-2' onClick={advanceTurn}>Next</Button>
            <Button className='m-2' onClick={sort}>Sort</Button>
            <Button color='danger' className='m-2' onClick={handleDelete}><i className="fas fa-skull-crossbones"></i></Button>
            <InitTable
                encounterArray={encounterObj.encounterArray}
                obj={encounter}
                setMonsterInitiative={setMonsterInitiative}
                deleteMonster={removeTurn}
                isDeleting={isDeleting}
            />
        </>
    )
}

export default InitTracker;