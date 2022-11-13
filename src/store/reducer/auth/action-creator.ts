import { authSlice } from './index';
import axios from 'axios';
import { AppDispatch } from '../../store';
import { IUser } from './../../../models/IUser';
import UserService from '../../../api/UserService';

export const AuthActionCreator = {
	login: (username: string, password: string) => (dispatch: AppDispatch) => {
		try {
			setTimeout(async () => {
				dispatch(authSlice.actions.setIsLoading(false));
				const response = await UserService.getUsers();
				const mookUser = response.data.find(user => user.username === username && user.password === password);
				if (mookUser) {
					localStorage.setItem('auth', 'true');
					localStorage.setItem('username', mookUser.username);
					dispatch(authSlice.actions.setUser(mookUser));
					dispatch(authSlice.actions.setIsAuth(true));
				} else {
					dispatch(authSlice.actions.setIsError('Incorrect username or password'))
				}
				authSlice.actions.setIsLoading(false)

			}, 1000);

		} catch (error) {
			dispatch(authSlice.actions.setIsError('ERROR!'));
		}
	},
	logout: () => async (dispatch: AppDispatch) => {
		debugger;
		localStorage.removeItem('username');
		localStorage.removeItem('auth');
		dispatch(authSlice.actions.setUser({} as IUser));
		dispatch(authSlice.actions.setIsAuth(false));
	}
}