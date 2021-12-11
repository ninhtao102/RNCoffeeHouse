import { combineReducers } from "redux";
import giftReducer from "./giftReducer";
import petReducer from "./petReducer";
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
  giftReducer,
  petReducer
  // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;
