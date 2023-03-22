import { GET_CHAT_USER } from "../Types/ChatType";

const initialState = {
  showChat: [],
};

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAT_USER:
      return {
        ...state,
        showChat: action.payload.result,
      };

    default:
      return state;
  }
};

export default ChatReducer;
