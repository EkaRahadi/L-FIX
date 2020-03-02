const initialState = {
    damage : null,
    lokasiPelanggan: null,
    idService: null,
    kode_service: null,
    teknisi: {}
};

const detailOnProcessReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'DETAIL_ONPROCESS':
            return {
                ...state,
                damage: action.damage,
                lokasiPelanggan: action.lokasiPelanggan,
                teknisi: action.teknisi,
                idService: action.idService,
                kode_service: action.kode_service
            };
        default:
            return state;
    };
};
export default detailOnProcessReducer;