const initialState = {
    kategori: null, 
    lokasiPelanggan: null, 
    teknisi: {}, 
    guarantee: {}
};

const detailGuaranteeReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'DETAIL_GUARANTEE':
            return {
                ...state,
                kategori: action.kategori,
                lokasiPelanggan: action.lokasiPelanggan,
                teknisi: action.teknisi,
                guarantee: action.guarantee
            };
        default:
            return state;
    };
};
export default detailGuaranteeReducer;