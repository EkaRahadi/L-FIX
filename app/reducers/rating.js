const initialState = {
    teknisi: {}
};

const ratingReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'RATING':
            return {
                ...state,
                teknisi: action.teknisi
            };
        default:
            return state;
    };
};
export default ratingReducer;