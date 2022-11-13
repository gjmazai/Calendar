import { EventActionCreator } from './reducer/event/actions-creators';
import { eventSlice } from './reducer/event/index';
import {AuthActionCreator} from './reducer/auth/action-creator';
import {authSlice} from './reducer/auth';

export const allActionsCreator  = {
	...AuthActionCreator,
	...authSlice.actions,
	...eventSlice.actions,
	...EventActionCreator,
}