
import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { logoPrimary, logoSecondary } from '../../styles';
import useApiAuthed from '../../hooks/useApiAuthedPut';
import { useSelector, useDispatch } from 'react-redux';
import { addEncounter, addIdToEncounter } from '../../redux/actionCreaters';
import ModalSave from '../formComponents/ModalSave';
import StatBlock from './StatBlock';
import { useHistory } from 'react-router';
import { RUN } from '../../routes';

/** Displays and controls saving the Encounter to the api
 * 
 *   @param enounter, hasUser
 */
const EncounterDisplay = ({ hasUser }) => {
    const encounter = useSelector(st => st.currentEncounter);
    const dispatch = useDispatch();
    const user = useSelector( st => st.user );
    const id = useSelector ( st => st.id );
    const monsterInfo = Object.values(encounter);
    const [ savedEncounter, isSaving, setOutbound ] = useApiAuthed();
    const history = useHistory();

    const [ modalShow, setModalShow ] = useState(false);
    

    const handleSave = () => {
        // Username authToken monsters [{slug:num}, {slug: num},...]
        const out = {
            "username": user.username,
            "authToken": user.token.token,
            "monsters": monsterInfo.map( m => ({[m.slug]: m.numberOf}))
        }
        if( id !== undefined){
            out.id = id;
            setOutbound(out);
        } else {
            setModalShow(true);
        }
    }

    const toggleModal = () => {
        setModalShow(!modalShow);
    }

    const handleModalSave = (name, description) => {
        const out = {
            "username": user.username,
            "authToken": user.token.token,
            "monsters": monsterInfo.map( m => ({[m.slug]: m.numberOf})),
            "name": name,
            "description": description
        }
        setOutbound(out);
    }

    useEffect( () => {
        if( savedEncounter !== undefined ) {
            dispatch(addEncounter(savedEncounter));
            dispatch(addIdToEncounter(Object.keys(savedEncounter.encounter)))
        }
    }, [ savedEncounter ]);

    const handleNavRunner = () => {
        history.push(RUN);
    }

    return (
        <>
            <h2>Encounter</h2>
            <div className='container rounded p-2' style={{background: logoPrimary}}>
                <StatBlock encounter={encounter}/>
                <ModalSave 
                    toggle={toggleModal} 
                    modal={modalShow} 
                    submit={handleModalSave}/>
                {hasUser && <div>
                    <Button className='m-1'
                        style={{background: logoSecondary}} 
                        disabled={isSaving} 
                        onClick={!isSaving ? handleSave : null}>
                            {isSaving ? 'Saving...' : 'Save'}
                    </Button>
                    <Button className='bg-warning m-1'
                        disabled={isSaving} 
                        onClick={handleNavRunner}>
                            <i className="fas fa-play-circle"></i>
                    </Button>
                </div>}
            </div>
        </>
        )
}

export default EncounterDisplay;