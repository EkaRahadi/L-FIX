const initialState = {
    nameCategory: null,
    image: null,
    jenisKerusakan: []
};

const dataKategoriReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SAVE_DATA_CATEGORY':
            return {
                // listEvent: state.listEvent.concat([action.payload])
                ...state,
                nameCategory: action.name,
                image: action.image,
                jenisKerusakan: action.payload
            };
        
       
        default:
            return state;
    };
};
export default dataKategoriReducer;