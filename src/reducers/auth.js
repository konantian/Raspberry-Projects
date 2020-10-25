const isAuthReducer = (state = false, action) => {
    switch (action.type){
        case "AUTH":
            return !state;
        default:
            return state;
    }
}

export default isAuthReducer;