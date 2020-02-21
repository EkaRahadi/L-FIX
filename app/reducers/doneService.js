const initialState = {
    done: null,
};

const doneServiceReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DONE_SERVICE' :
            return {
                ...state,
                done : action.payload
            };
        default :
            return state;
    }
}

export default doneServiceReducer;