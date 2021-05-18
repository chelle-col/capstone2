
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useApiAuthed from './hooks/useApiAuthedGet';
import useApiAuthedDel from './hooks/useApiAuthDel';
import Loading from './Loading';
import { addAllEncounters } from './redux/actionCreaters';
import PartialListItem from './listComponents/PartialListItem';
import EncouterListItem from './listComponents/EncounterListItem';

const UserPage = () => {
    const dispatch = useDispatch();
    const user = useSelector( st => st.user );
    const [ encounters, isloading, setOut ] = useApiAuthed();
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
            dispatch(addAllEncounters(encounters));
        }
    }, [encounters]);

    if(isloading){
        return <Loading /> 
    }

    const handleClick = e => {
        console.log('clicked');
        const id = e.target.parentElement.dataset.id;
        const encounterMonsters = useSelector( st => st[id].monsters);
        if( encounterMonsters === undefined ){
            
        }
        // Put encounter into state

        // Get from api if not in state

        // redirect to home
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