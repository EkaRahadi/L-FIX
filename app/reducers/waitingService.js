const initialState = {
    waiting: null,
};

const waitingServiceReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'WAITING_SERVICE' :
            return {
                ...state,
                waiting : action.payload
            };
        default :
            return state;
    }
}

export default waitingServiceReducer;