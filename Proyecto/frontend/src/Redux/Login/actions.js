import Types from "../Login/types";
import axios from "axios";


export const LoadUser = () => (dispatch, getState) => {
    dispatch({ type: Types.IS_LOADING })
    axios.get("http://127.0.0.1:8000/api/user/", tokenConfig(getState))
        .then(res => {
            dispatch({ type: Types.IS_READY, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: Types.AUTH_ERROR })
        })
}

export const onLogin = (username, password) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({ username, password });

    axios.post("http://127.0.0.1:8000/api/user/login/", body, config)
        .then((res) => {
            dispatch({
                type: Types.LOGIN_SUCCESS,
                payload: res.data,
            });
            window.location.href = '/#/productos'
        })
        .catch((err) => {
            console.log("Error", err);
            dispatch({ type: Types.AUTH_ERROR });
        });
};

export const onRegister = ({ username, password, email }) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({ username, email, password });

    axios.post("http://127.0.0.1:8000/api/user/", body, config)
        .then((res) => {
            dispatch({
                type: Types.LOGIN_SUCCESS,
                payload: res.data
            });
            window.location.href = '/#/login'
        })
        .catch((err) => {
           // dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({type: Types.REGISTER_FAIL});
        });
};

export const onLogout = () => (dispatch, getState) => {
    axios
        .post("http://127.0.0.1:8000/api/logout/", null, tokenConfig(getState))
        .then((res) => {
            dispatch({ type: 'CLEAR_LEADS' });
            dispatch({
                type: Types.AUTH_ERROR,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

export const tokenConfig = (getState) => {
    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
};