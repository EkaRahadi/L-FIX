const initialState = {
    damage : null,
    lokasiPelanggan: null,
    teknisi: {}
};

const detailDoneReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'DETAIL_DONE':
            return {
                ...state,
                damage: action.damage,
                lokasiPelanggan: action.lokasiPelanggan,
                teknisi: action.teknisi
            };
        default:
            return state;
    };
};
export default detailDoneReducer;