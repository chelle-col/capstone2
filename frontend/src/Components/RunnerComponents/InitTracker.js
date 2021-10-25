import InitTable from "./InitTable";
import { Button } from 'reactstrap';
import { useEffect, useState } from "react";
import Header from './Header';

const InitTracker = ({ setMonsterInitiative, deleteMonster, encounter, setTurn }) => {

    const [ isDeleting, setIsDeleting ] = useState(false);

    const sortIntoArry = obj => {
       return Object.values(obj).sort(compareCreatures)
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
            encounterArray : Object.values(encounter)
        };
        return encounterObject;
    };
   
    const [ encounterObj, setEncounterObj ] = 
        useState(buildEncounterObj(encounter));
    
    useEffect(() => {
        const encounterAsArray = Object.values(encounter);
        encounterAsArray.forEach( entry => {
            if(!encounterObj[entry.slug]){
                encounterObj.encounterArray.push(entry);
                setEncounterObj( encounterObj => ({
                    ...encounterObj,
                    [entry.slug] : entry,
                    encounterArray: encounterObj.encounterArray
                }))
            }
        })
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
            <Header title='Initiaitve Tracker'/>
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