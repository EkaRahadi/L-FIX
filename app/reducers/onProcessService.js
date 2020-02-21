const initialState = {
    onProcess: null,
};

const onProcessServiceReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ONPROCESS_SERVICE' :
            return {
                ...state,
                onProcess : action.payload
            };
        default :
            return state;
    }
}

export default onProcessServiceReducer;