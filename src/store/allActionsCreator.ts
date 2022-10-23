import {AuthActionCreator} from './reducer/auth/action-creator';
import {authSlice} from './reducer/auth';

export const allActionsCreator  = {
	...AuthActionCreator,
	...authSlice.actions,
}