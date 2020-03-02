const initialState = {
    idService: null,
    kode_service: null,
    kategori : null,
    lokasiPelanggan: null,
    teknisi: {}
};

const detailWaitingReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'DETAIL_WAITING':
            return {
                ...state,
                idService: action.idService,
                kode_service: action.kode_service,
                kategori: action.kategori,
                lokasiPelanggan: action.lokasiPelanggan,
                teknisi: action.payload
            };
        default:
            return state;
    };
};
export default detailWaitingReducer;