import { combineReducers } from "redux";
import authReducer from "./reducer/auth/index";
import eventReducer from "./reducer/event/index";

export const RootReducer = combineReducers({
	authReducer,
	eventReducer,
})