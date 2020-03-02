const initialState = {
    damage : null,
    kategori: null,
    lokasiPelanggan: null,
    teknisi: {},
    guarantee: {}
};

const detailDoneReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'DETAIL_DONE':
            return {
                ...state,
                damage: action.damage,
                kategori: action.kategori,
                lokasiPelanggan: action.lokasiPelanggan,
                teknisi: action.teknisi,
                guarantee: action.guarantee,
                kode_service: action.kode_service
            };
        default:
            return state;
    };
};
export default detailDoneReducer;