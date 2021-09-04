import InitTable from "./InitTable";
import { Button } from 'reactstrap';
import { useState } from "react";

const InitTracker = ({ encounter, changeInitaitive, setTurn }) => {

    const [ encounterArray, setEncounterArray ] = 
            useState(Object.values(encounter).map(
                m => ({name: m.name, slug:m.slug, initiative: m.initiative || 0})
            ));

    const advanceTurn = () => {
        setEncounterArray( (encounterArray) => [...encounterArray.slice(1), ...encounterArray.slice(0, 1)]);
        setTurn(encounterArray[0]);
    };

    return (
        <>
            <Button onClick={advanceTurn}>Next</Button>
            <Button>Sort</Button>
            <InitTable encounterArray={encounterArray} changeInitaitive={changeInitaitive}/>
        </>
    )
}

export default InitTracker;