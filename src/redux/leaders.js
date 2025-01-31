import * as ActionType from "./ActionTypes";


export const Leaders = (state={
    isLoading : true,
    errMess:null,
    leaders : []    
    },action)=>{
    switch(action.type){
        case ActionType.LEADER_LOADING:
            return {...state, isLoading: true, errMess: null, leaders: []}
        case ActionType.ADD_LEADER:
            return {...state, isLoading: false, errMess: null, leaders: action.payload}
        case ActionType.LEADER_FAILED:
            return {...state, isLoading: false, errMess: action.payload}
        default :
            return state;
    }
}