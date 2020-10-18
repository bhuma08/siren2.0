const initialState ={
    goal : "",
    actionOne : "",
    actionTwo :"",
    actionThree:"",
    actionFour:"",
    start_date:"",
    end_date:'',
    username:''
}

function GoalsReducer (state = initialState, action){
    switch (action.type){
        case "ADD_GOAL" :
            return {...state, goal: action.payload }
        case "ADD_ACTIONONE" :
            return{...state, actionOne: action.payload}
        case "ADD_ACTIONTWO" :
            return{...state, actionTwo: action.payload}
        case "ADD_ACTIONTHREE" :
            return{...state, actionThree: action.payload}
        case "ADD_ACTIONFOUR" :
            return{...state, actionFour: action.payload}
        case "ADD_START" :
            return{...state, start_date: action.payload}
        case "ADD_END" :
            return{...state, end_date: action.payload}
        case "ADD_USERNAME" :
            return{...state, username: action.payload}
        default:
            return state;
    }
}

export default GoalsReducer;