const initState = { userData: [] };

function goals(state = initState, action) {
  switch (action.type) {
    case "LOAD_DATA":
      return { ...state, userData: action.payload };
    
    default:
      return state;
    }
}

export default goals;