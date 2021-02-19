import Types from "../Login/types";
const initialState = {
    token: localStorage.getItem('token'),
    isLogin: false,
    isLoading: false,
    user: null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case Types.IS_READY:
            return {
                ...state,
                isLogin: true,
                isLoading: false,
                user: action.payload
            }
        case Types.AUTH_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                isLogin: false,
                isLoading: false
            }
        case Types.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isLogin: true
            }
        default:
            return state
    }
}

export default loginReducer;