import * as actions from './actionTypes';


export const addAllMonsters = ( monsters ) => (
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

export const addToCurrentEncounter = ( monster ) => (
    {'type': actions.ADD_TO_CURR, 'payload': { ...monster, numberOf: 1 }}
)

export const changeNumOf = ( monster, numberOf ) => (
    {'type': actions.ADD_TO_CURR, 'payload': { ...monster, numberOf }}
)

export const removeFromEncounter = ( monster ) => (
    {'type': actions.REMOVE_FROM_ENCOUNTER, 'payload': monster }
)

export const addIdToEncounter = ( id ) => (
    {'type': actions.ADD_ID_TO_ENCOUNTER, 'payload': id}
)