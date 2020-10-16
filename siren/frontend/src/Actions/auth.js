import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    // REGISTER_SUCCESS,
    // REGISTER_FAIL,
} from './Types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING });

    const token = getState().AuthReducer.token;

    const config = {
        headers :{
            'Content-Type': 'application/json'
        }
    }

    if(token){
        config.headers['Authorization']=`Token ${token}`
    }
  
    axios
        .get('http://127.0.0.1:8000/api/user/', config)
        .then((res) => {
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        })
        .catch((err) => {
            // dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR,
            });
        });
};

//Login
export const login = (username, password) => dispatch => {

    const config = {
        headers :{
            'Content-Type': 'application/json'
        }
    }

    //Request body
    const body= JSON.stringify({ username, password })
  
    axios
        .post('http://127.0.0.1:8000/api/login/', body, config)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            // dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL,
            });
        });
};

//Logout user
export const logout = () => (dispatch, getState) => {
    axios
        .post('http://127.0.0.1:8000/api/logout/', null, tokenConfig(getState))
        .then((res) => {
            dispatch({ type: 'CLEAR_LEADS' });
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        })
        .catch((err) => {
        // dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR,
        });
    });
}

// Setup config with token - helper function
export const tokenConfig = (getState) => {
    // Get token from state
    const token = getState().AuthReducer.token;  
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    // If token, add to headers config
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
};
  
// REGISTER USER
export const register = ({ username, password }) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
  
    // Request Body
    const body = JSON.stringify({ username, password });
  
    axios
        .post('http://127.0.0.1:8000/api/register/', body, config)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL,
            });
        });
};