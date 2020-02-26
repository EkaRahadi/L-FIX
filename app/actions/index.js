export const loginSuccess = (response) => {
    return {
        type : 'SIGN_IN',
        payload : response
    };
};

export const getDataProject = (response) => {
    return {
        type: 'GET_LIST_PROJECT',
        payload : response
    };
};

export const getSquadSelected = (response) => {
    return {
        type: 'GET_SQUAD_SELECTED',
        payload : response
    };
};

export const getEventSelected = (response) => {
    return {
        type: 'GET_EVENT_SELECTED',
        payload: response
    }
}

export const getDataMember = (response) => {
    return {
        type : 'GET_LIST_MEMBER',
        payload : response
    };
};

export const getDataEvent = (dataEvent) => {
    return {
        type : 'GET_DATA_EVENT',
        payload: dataEvent
    };
};

export const getDataMeasure = (dataMeasure) => {
    return {
        type: 'GET_DATA_MEASURE',
        payload: dataMeasure
    }
};

export const getMeasureSelected = (dataMeasure) => {
    return {
        type: 'GET_MEASURE_SELECTED',
        payload: dataMeasure
    }
};

export const createDataPoint= (dataPoint) => {
    return {
        type: 'SAVE_DATA_LOCAL_TO_AS',
        payload: dataPoint
    };
};

export const updateDataPoint = (measurementId,updateDataMembers, datapatch, datafix) => {
    return {
        type: 'UPDATE_DATA_AS',
        id: measurementId,
        datapatch,
        datafix,
        payload: updateDataMembers
    };
};

export const initDataAs = (initDataAs) => {
    return {
        type : 'INIT_DATA_AS',
        payload : initDataAs
    }
}

export const getDetailEvent = (data) => {
    return {
        type: 'DETAIL_EVENT',
        payload: data
    }
}

// =================================LFIX=====================================================================

export const userAccount = (data, status) => {
    return {
        type: 'USER_ACCOUNT',
        payload: data,
        status: status
    }
}

export const userLogout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}

export const dataCategory = (name, image, jenisKerusakan) => {
    return {
        type: 'SAVE_DATA_CATEGORY',
        name: name,
        image: image,
        payload: jenisKerusakan

    }
}

export const waitingService = (data) => {
    return {
        type: 'WAITING_SERVICE',
        payload: data

    }
}

export const onProcessService = (data) => {
    return {
        type: 'ONPROCESS_SERVICE',
        payload: data

    }
}

export const doneService = (data) => {
    return {
        type: 'DONE_SERVICE',
        payload: data

    }
}

export const detailWaiting = (kategori, lokasiPelanggan, data) => {
    return {
        type: 'DETAIL_WAITING',
        payload: data,
        kategori: kategori,
        lokasiPelanggan: lokasiPelanggan

    }
}

export const detailTecnician = (data) => {
    return {
        type: 'DETAIL_TECHNICIAN',
        payload: data,
    }
}