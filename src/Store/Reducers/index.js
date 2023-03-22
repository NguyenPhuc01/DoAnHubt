import { combineReducers } from "redux";
import RegisterReducer from "./RegisterReducer";
import LoginReducer from "./LoginReducer";
import ProductReduce from "./ProductReduce";
import ChatReducer from "./ChatReducer";
const rootReducer = combineReducers({
  register: RegisterReducer,
  login: LoginReducer,
  product: ProductReduce,
  chat: ChatReducer,
});

export default rootReducer;
