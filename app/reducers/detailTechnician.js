const initialState = {
    teknisi: null
};

const detailTechnicianReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'DETAIL_TECHNICIAN':
            return {
                ...state,
                teknisi: action.payload
            };
        default:
            return state;
    };
};
export default detailTechnicianReducer;