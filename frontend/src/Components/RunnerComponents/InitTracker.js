import InitTable from "./InitTable";
import { Button } from 'reactstrap';
import { useState } from "react";

const InitTracker = ({ encounter, setTurn }) => {
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
            encounterArray : sortIntoArry(encounter)
        };
        return encounterObject;
    };
   
    const [ encounterObj, setEncounterObj ] = 
        useState(buildEncounterObj(encounter));

    const advanceTurn = () => {
        setEncounterObj( (encounterObj) => ({
            ...encounterObj,
            encounterArray: [...encounterObj.encounterArray.slice(1), 
                ...encounterObj.encounterArray.slice(0, 1)]}));
        setTurn(encounterObj.encounterArray[1]);
    };

    const sort = () => {
        setEncounterObj( (encounterObj) => ({
            ...encounterObj,
            encounterArray: sortIntoArry(encounter)}));
    };

    return (
        <>
            <Button onClick={advanceTurn}>Next</Button>
            <Button onClick={sort}>Sort</Button>
            <InitTable
                encounterArray={encounterObj.encounterArray}
                obj={encounter}
            />
        </>
    )
}

export default InitTracker;