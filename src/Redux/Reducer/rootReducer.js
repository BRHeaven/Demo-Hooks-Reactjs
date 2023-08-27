import { combineReducers } from "redux";
import handleReducer from "./handleReducer";
const rootReducer = combineReducers({
    handleReducer : handleReducer,
});
export default rootReducer;