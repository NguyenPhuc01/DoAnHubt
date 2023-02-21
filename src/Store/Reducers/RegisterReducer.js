import {
  POST_REGISTER,
  POST_REQUEST_REGISTER,
  POST_REQUEST_REGISTER_ERR,
} from "../Types/RegisterType";
const initialState = {
  loading: false,
  status: null,
  err: null,
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTER:
      return {
        ...state,
        status: action.payload.responseCode,
        loading: false,
      };
    case POST_REQUEST_REGISTER:
      return {
        ...state,
        loading: true,
      };
    case POST_REQUEST_REGISTER_ERR:
      console.log("errrrr", action.payload.response.data.responseDesc);
      return {
        ...state,
        loading: false,
        err: action.payload.response.data.responseDesc,
      };

    default:
      return state;
  }
};

export default RegisterReducer;
