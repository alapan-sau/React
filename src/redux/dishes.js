import * as ActionType from "./ActionTypes";


export const Dishes = (state={
    isLoading : true,
    errMess:null,
    dishes : []    
    },action)=>{
    switch(action.type){
        case ActionType.DISH_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}
        case ActionType.ADD_DISH:
            return {...state, isLoading: false, errMess: null, dishes: action.payload}
        case ActionType.DISH_FAILED:
            return {...state, isLoading: false, errMess: action.payload}
        default :
            return state;
    }
}