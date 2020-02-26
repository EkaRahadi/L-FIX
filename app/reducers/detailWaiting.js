const initialState = {
    kategori : null,
    lokasiPelanggan: null,
    teknisi: {}
};

const detailWaitingReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'DETAIL_WAITING':
            return {
                ...state,
                kategori: action.kategori,
                lokasiPelanggan: action.lokasiPelanggan,
                teknisi: action.payload
            };
        default:
            return state;
    };
};
export default detailWaitingReducer;