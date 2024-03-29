import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";
import slideReducer from "./SiteReducer";

const mergedReducers = combineReducers({userInfo: loginReducer, slideInfo: slideReducer})

export default mergedReducers