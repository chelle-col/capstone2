
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import useApiAuthed from './hooks/useApiAuthedGet';
import useApiAuthedDel from './hooks/useApiAuthDel';
import Loading from './Loading';
import { addAllEncounters, addIdToEncounter, changeCurrEncounter, changeEncounter } from './redux/actionCreaters';
import PartialListItem from './listComponents/PartialListItem';
import EncouterListItem from './listComponents/EncounterListItem';
import { Button } from 'reactstrap';


/** User Page: displays user information
 *  Lists all of the user encounters
 * 
 * @returns 
 */
const UserPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector( st => st.user );
    const stateEncounters = useSelector( st => st.encounters );
    const [ encounters, encounter, isloading, setOut ] = useApiAuthed();
    const [ del, isDeleteing, setOutDel ] = useApiAuthedDel();

    // Sets the outbound information to api
    // to get the encounter information of the user
    useEffect( ()=>{
        const out = {
            'username': user.username,
            'authToken': user.token.token
        }
        setOut(out);
    }, []);

    // After encounters have been fetched from the api
    // Formats and places into state
    useEffect( () => {
        if(encounters !== undefined){
            // Adding all encounters to state-convert from array to object
            let allEncounterObj = {};
            for( let e of encounters){
                allEncounterObj[e.id] = {...e}
            }
            dispatch(addAllEncounters(allEncounterObj));
        }
    }, [encounters]);

    // Gets single encounter from api and places into state
    useEffect( () => {
        if(encounter !== undefined){
            const formatedEncounter = Object.values(encounter)[0];
            // Add monsters to State
            dispatch(changeEncounter(formatedEncounter.encounter.id, formatedEncounter.monsters))
            dispatch(addIdToEncounter(formatedEncounter.encounter.id));
            //Change current encounter
            dispatch(changeCurrEncounter(formatedEncounter.monsters));
            history.push('/');
        }
    }, [encounter]);

    if(isloading){
        return <Loading /> 
    }

    const handleClick = e => {
        const id = e.target.parentElement.dataset.id;
        // Triggers getting info from api
        if( stateEncounters[id].monsters === undefined ){
            const out = {
                'username' : user.username,
                'authToken' : user.token.token,
                'id' : id
            }
            setOut(out);
        } else {
            // Set currentEncounter to chosen encounter
            dispatch(changeCurrEncounter(stateEncounters[id].monsters));
            history.push('/');
        }
    }

    const handleDelete = e => {
        const out = {
            'username' : user.username,
            'authToken' : user.token.token,
            'encounterId' : e.target.parentElement.dataset.id
        }
        setOutDel(out);
        e.target.parentElement.remove();
    }

    const createNewEncounter = () => {
        console.log('clicked')
        // Set current encounter to empty object
        dispatch(changeCurrEncounter({}))
        // Redirect to home
        history.push('/')
    }
    
    return (
        <>
            <h1>User Page</h1>
            <div className='container-fluid'>
                <div className='row'>
                <PartialListItem items={['Name', 'Description', 'Id']} />
                <Button onClick={createNewEncounter} className='col-1 bg-warning'>New</Button>
                <div className='col-1'></div>
                </div>
                {encounters.map( e => <EncouterListItem 
                        key={e.id} 
                        item={e} 
                        handleClick={handleClick} 
                        handleDelete={handleDelete}
                        isLoading={isDeleteing && isloading}/>)}
            </div>
        </>
        )
}

export default UserPage;