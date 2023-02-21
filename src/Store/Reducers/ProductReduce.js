import { GET_PRODUCT } from "../Types/ProductType";

const initialState = {
  loading: false,
  data: [],
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default RegisterReducer;
