
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import useApiAuthed from './hooks/useApiAuthedGet';
import useApiAuthedDel from './hooks/useApiAuthDel';
import Loading from './Loading';
import { addAllEncounters, changeCurrEncounter, changeEncounter } from './redux/actionCreaters';
import PartialListItem from './listComponents/PartialListItem';
import EncouterListItem from './listComponents/EncounterListItem';

const UserPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector( st => st.user );
    if( user.username === undefined ){
        history.push('/')
    }

    const stateEncounters = useSelector( st => st.encounters );
    const [ encounters, encounter, isloading, setOut ] = useApiAuthed();
    const [ del, isDeleteing, setOutDel ] = useApiAuthedDel();


    useEffect( ()=>{
        const out = {
            'username': user.username,
            'authToken': user.token.token
        }
        setOut(out);
    }, []);

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

    useEffect( () => {
        if(encounter !== undefined){
            const formatedEncounter = Object.values(encounter)[0];
            // Add monsters to State
            console.log(Object.values(encounter));
            console.log(formatedEncounter.encounter.id);
            dispatch(changeEncounter(formatedEncounter.encounter.id, formatedEncounter.monsters))
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
            console.log('clicked')
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

    return (
        <>
            <h1>User Page</h1>
            <div className='container-fluid'>
                <div className='row'>
                <PartialListItem items={['Name', 'Description', 'Id']} />
                <div className='col-2'></div>
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