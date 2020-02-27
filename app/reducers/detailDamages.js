const initialState = {
    damages: null
};

const detailDamageReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'DETAIL_DAMAGES':
            return {
                ...state,
                damages: action.payload
            };
        default:
            return state;
    };
};
export default detailDamageReducer;