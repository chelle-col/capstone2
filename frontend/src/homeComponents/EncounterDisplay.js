

import NumListItem from '../listComponents/NumListItem';
import PartialListItem from '../listComponents/PartialListItem';
import { calcXp, calcDifficulty, getColor, getTextColor } from '../helpers';
import useForceUpdate from '../hooks/useForceUpdate';
import Dropdown from '../formComponents/Dropdown';
import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { logoPrimary, logoSecondary } from '../styles';
import useApiAuthed from '../hooks/useApiAuthedPut';
import { useSelector, useDispatch } from 'react-redux';
import { addEncounter, addIdToEncounter } from '../redux/actionCreaters';
import ModalSave from '../formComponents/ModalSave';

const EncounterDisplay = ({ encounter, hasUser }) => {
    const dispatch = useDispatch();
    const user = useSelector( st => st.user );
    const id = useSelector ( st => st.id );
    const monsterInfo = Object.values(encounter);
    const [ savedEncounter, isSaving, setOutbound ] = useApiAuthed();
    const [ players, setPlayers ] = useState(4);
    const [ level, setLevel ] = useState(3);
    const [ modalShow, setModalShow ] = useState(false);
    
    const totalXp = monsterInfo.reduce( ( acc, curr ) => acc + calcXp( curr.numberOf, curr.cr ), 0);
    
    const forceUpdate = useForceUpdate();

    const nums = [1,2,3,4,5,6,7,8,9,10];
    const levels = [...nums, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const difficulty = calcDifficulty(players, level, totalXp);
    

    const handleClick = (num) => {
        setPlayers(num);
    }

    const handleLevel = num => {
        setLevel(num);
    }

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
    }, [ savedEncounter ])

    return (
        <>
            <h2>Encounter</h2>
            <div className='container rounded p-2' style={{background: logoPrimary}}>
                <div className='row'>
                    <div className='col'>
                        <Dropdown 
                            header={`Number of Players: ${players}`} 
                            actions={nums} 
                            handleClick={handleClick} 
                            size='sm'/>
                        <Dropdown 
                            header={`Player Level: ${level}`} 
                            actions={levels} 
                            handleClick={handleLevel} 
                            size='sm'/>
                    </div>
                </div>
                <div className='row'>
                <PartialListItem items={[ ' ', 'Name', "CR"]}/>
                </div>
                <div className='row'>
                {monsterInfo.map( m => <NumListItem key={m.slug} item={m} update={forceUpdate}/>)}
                <div className='col'>
                    <PartialListItem items={['Total Experience: ', totalXp]}/>
                </div>
                <div className='col'>
                    <PartialListItem items={['Experience Per Player: ', totalXp/players]} />
                </div>
                <div className='row'>
                <div className={`col-4 bg-${getColor(difficulty)} rounded m-2`} style={{color: getTextColor(difficulty)}}>
                    <PartialListItem items={[difficulty]} />
                </div>
                </div>
                </div>
                <ModalSave 
                    toggle={toggleModal} 
                    modal={modalShow} 
                    submit={handleModalSave}/>
                {hasUser && <div className='row'>
                    <Button style={{background: logoSecondary}} 
                        disabled={isSaving} 
                        onClick={!isSaving ? handleSave : null}>
                            {isSaving ? 'Saving...' : 'Save'}
                    </Button>
                </div>}
            </div>
        </>
        )
}

export default EncounterDisplay;