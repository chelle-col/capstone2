import * as actions from './actionTypes';

const INIT_STATE = {
    monsters : {},
    user: {}
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
        case actions.REMOVE_USER:
                delete state.user;
                return {...state};
        case actions.ADD_USER:
            return {
                ...state,
                user : action.user
            };
        default:
            return state; 
    }
}

export default rootReducer;