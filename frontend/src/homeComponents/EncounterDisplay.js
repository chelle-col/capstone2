import NumListItem from '../listComponents/NumListItem';

const EncounterDisplay = ({ encounter }) => {

    return (
        <>
            <h1>Encounter</h1>
            <ul>
                {Object.values(encounter).map(( m, idx ) => <NumListItem key={idx} item={m}/>)}
            </ul>
        </>
        )
}

export default EncounterDisplay;