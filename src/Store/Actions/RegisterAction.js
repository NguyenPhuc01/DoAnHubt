import axios from "axios";
import {
  POST_REGISTER,
  POST_REQUEST_REGISTER,
  POST_REQUEST_REGISTER_ERR,
} from "../Types/RegisterType";
export const register = (data) => async (dispatch) => {
  dispatch({
    type: POST_REQUEST_REGISTER,
  });
  try {
    const response = await axios.post(
      "https://trogiare-production.up.railway.app/api/v1/reg",
      data
    );

    dispatch({
      type: POST_REGISTER,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_REQUEST_REGISTER_ERR,
      payload: error,
    });
  }
};
