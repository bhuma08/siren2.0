const initialState ={
    habit : "",
    frequency : "",
    progress :"",
    complete: false
}

function HabitsReducer (state = initialState, action){
    switch (action.type){
        case "ADD_HABIT" :
            return {...state, habit: action.payload }
        case "ADD_FREQUENCY" :
            return {...state, frequency: action.payload }
        case "ADD_PROGRESS" :
            return {...state, progress: action.payload }
        case "ADD_COMPLETE" :
            return {...state, progress: action.payload }
        case "TOGGLE_COMPLETE" :
            return !state.complete
        default:
            return state;
    }
}

export default HabitsReducer;