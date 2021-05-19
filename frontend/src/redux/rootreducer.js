import * as actions from './actionTypes';

const INIT_STATE = {
    monsters : {},
    user: {},
    currentEncounter: {},
    encounters : {}
}

const rootReducer = (state=INIT_STATE, action) => {
    switch (action.type){
        // Adds all the monsters to state 
        case actions.ADD_ALL_MONSTERS:
            return {
                ...state,
                'monsters': {...action.monsters}
            };
        // Adds enounter to state
        case actions.ADD_ENCOUNTER:
            return {
                ...state,
                encounter : {
                    ...state.encounter,
                    ...action.payload.encounter
                }
            };
        // Adds id of encounter to state
        case actions.ADD_ID_TO_ENCOUNTER:
            return {
                ...state,
                id: action.payload
            };
        // Replaces the current encounter
        case actions.CHANGE_ENCOUNTER:
            return {
                ...state,
                encounters :{
                    ...state.encounters,
                    [action.payload.id]:{
                        ...state.encounters[action.payload.id],
                        monsters : action.payload.partialEncounter
                    }
                }
            };
        // Removes the monster from encounter
        case actions.REMOVE_FROM_ENCOUNTER:
            const {currentEncounter, ...rest} = state;
            delete currentEncounter[action.payload.slug];
            return {...rest,
                currentEncounter
                };
        // Adds all encounters to state
        case actions.ADD_ALL_ENCOUNTERS:
            return {
                ...state,
                encounters : {
                    ...action.payload
                }
            };
        // Removes user from state
        case actions.REMOVE_USER:
                const clone = {...state};
                clone.user = {};
                return clone;
        // Adds user to state
        case actions.ADD_USER:
            return {
                ...state,
                user : action.user
            };
        // Adds to current encounter - doesn't replace
        case actions.ADD_TO_CURR:
            return {
                ...state,
                currentEncounter : {
                    ...state.currentEncounter,
                    [action.payload.slug]:{
                      ...action.payload
                }
                }
            };
        // Adds current encounter - replaces entirely
        case actions.CHANGE_CURR_ENCOUNTER:
            return {
                ...state,
                currentEncounter : {
                    ...action.payload
                }
            }
        default:
            return state; 
    }
}

export default rootReducer;