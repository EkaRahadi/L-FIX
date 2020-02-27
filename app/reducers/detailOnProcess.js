const initialState = {
    damage : null,
    lokasiPelanggan: null,
    teknisi: {}
};

const detailOnProcessReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'DETAIL_ONPROCESS':
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
export default detailOnProcessReducer;