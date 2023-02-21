import axios from "axios";
import {
  POST_LOGIN,
  POST_REQUEST_ERR,
  POST_REQUEST_SUCCESS,
} from "../Types/LoginType";

export const LoginAction = (data) => async (dispatch) => {
  dispatch({
    type: POST_REQUEST_SUCCESS,
  });
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL}/api/v1/auth/local`,
      data
    );
    dispatch({
      type: POST_LOGIN,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_REQUEST_ERR,
      payload: error,
    });
  }
};
