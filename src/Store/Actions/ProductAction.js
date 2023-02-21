import axios from "axios";
import {
  GET_PRODUCT,
  GET_PRODUCT_ERR,
  GET_PRODUCT_SUCCESS,
} from "../Types/ProductType";

export const GetProduct = (data) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_SUCCESS,
  });
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/v1/posts/filter`
    );
    dispatch({
      type: GET_PRODUCT,
      payload: response.data.result,
    });
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: GET_PRODUCT_ERR,
      payload: error,
    });
  }
};
