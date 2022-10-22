import { combineReducers } from "redux";
import authReducer from "./reducer/auth/index";

export const RootReducer = combineReducers({
	authReducer,
})