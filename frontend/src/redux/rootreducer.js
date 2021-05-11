import * as actions from './actionTypes';

const INIT_STATE = {
    monsters : {},
    user: {},
    currentEncounter: {}
}

const rootReducer = (state=INIT_STATE, action) => {
    switch (action.type){
        case actions.ADD_ALL_MONSTERS:
            return {
                ...state,
                'monsters': {...action.monsters}
            };
        case actions.ADD_ENCOUNTER:
            return {
                ...state,
                [action.id] : {
                    ...action.payload
                }
            };
        case actions.CHANGE_ENCOUNTER:
            return {
                ...state,
                [action.payload.id]:{
                    ...state[action.payload.id],
                    ...action.payload.encounter
                }
            };
        case actions.REMOVE_FROM_ENCOUNTER:
            const {currentEncounter, ...rest} = state;
            delete currentEncounter[action.payload.slug];
            return {...rest,
                currentEncounter
                };
        case actions.REMOVE_USER:
                const clone = {...state};
                clone.user = {};
                return clone;
        case actions.ADD_USER:
            return {
                ...state,
                user : action.user
            };
        case actions.ADD_TO_CURR:
            return {
                ...state,
                currentEncounter : {
                    ...state.currentEncounter,
                    [action.payload.slug]:{
                      ...action.payload
                }
                }
            }
        default:
            return state; 
    }
}

export default rootReducer;