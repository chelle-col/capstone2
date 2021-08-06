import InitTable from "./InitTable";
import { useMemo } from "react";

const InitTracker = ({ encounter }) => {

    const preparedEncounter = useMemo( 
        () => Object.values(encounter).map( m => ({name: m.name, initiative: ''})), []
    );

    return (
        <>
            <InitTable data={preparedEncounter} />
        </>
    )
}

export default InitTracker;