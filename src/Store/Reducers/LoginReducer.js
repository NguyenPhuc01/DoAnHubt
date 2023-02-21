import {
  POST_LOGIN,
  POST_REQUEST_ERR,
  POST_REQUEST_SUCCESS,
} from "../Types/LoginType";

const initialState = {
  loading: false,
  status: null,
  loginResult: localStorage.getItem("name"),
  token: null,
  err: null,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN:
      localStorage.setItem("name", action.payload.result.firstName);
      localStorage.setItem("token", action.payload.result.token);

      return {
        ...state,
        status: action.payload.responseCode,
        loading: false,
        loginResult: action.payload.result.firstName,
      };

    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: true,
      };
    case POST_REQUEST_ERR:
      return {
        ...state,
        loading: false,
        err: action.payload.response.data.responseDesc,
      };

    default:
      return state;
  }
};

export default LoginReducer;
