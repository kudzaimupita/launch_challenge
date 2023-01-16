import { combineReducers } from "redux";
import base from "./base";

interface action {
  type: any;
  payload: String;
}
const rootReducer = (asyncReducers: any) => (state: any, action: action) => {
  const combinedReducer = combineReducers({
    base,
    ...asyncReducers,
  });
  return combinedReducer(state, action as any);
};

export default rootReducer;
