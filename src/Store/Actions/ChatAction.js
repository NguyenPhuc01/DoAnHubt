import axios from "axios";
import { GET_CHAT_USER } from "../Types/ChatType";

export const ChatAction = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    let config = {
      method: "get",
      url: `${process.env.REACT_APP_URL}/api/v1/messsages/get-converstation`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.request(config);
    dispatch({
      type: GET_CHAT_USER,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
