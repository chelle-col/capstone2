import * as actions from './actionTypes;';


export const addAllMonster = ( monsters ) => (
    { 'type': actions.ADD_ALL_MONSTERS, monsters }
)

export const addUser = ( user ) => (
    { 'type': actions.ADD_USER, user }
)

export const removeUser = ( user ) => (
    { 'type': actions.REMOVE_USER, user }
)

export const changeEncounter = ( id, partialEncounter ) => (
    { 'type': actions.CHANGE_ENCOUNTER, 'payload': { id, partialEncounter }}
)

export const addEncounter = ( encounter ) => (
    { 'type': actions.ADD_ENCOUNTER, 'payload': encounter }
)