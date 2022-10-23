import { allActionsCreator } from './../store/allActionsCreator';
import { useAppDispatch } from "./usetypedDispatch";
import { bindActionCreators } from "redux";

export const useActions = () => {
	const dispatch = useAppDispatch();
	return bindActionCreators(allActionsCreator, dispatch);
}