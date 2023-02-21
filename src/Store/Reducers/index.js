import { combineReducers } from "redux";
import RegisterReducer from "./RegisterReducer";
import LoginReducer from "./LoginReducer";
import ProductReduce from "./ProductReduce";
const rootReducer = combineReducers({
  register: RegisterReducer,
  login: LoginReducer,
  product: ProductReduce,
});

export default rootReducer;
