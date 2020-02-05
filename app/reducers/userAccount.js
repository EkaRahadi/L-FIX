const initialState = {
    data: null,
    userLogin: false
};

const userAccountReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'USER_ACCOUNT' :
            return {
                ...state,
                data : action.payload,
                userLogin : action.status
            };
        default :
            return state;
    }
}

export default userAccountReducer;