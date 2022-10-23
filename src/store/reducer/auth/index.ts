import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './../../../models/IUser';
import { AuthState } from './types';

const initialState: AuthState = {
	isAuth: false,
	error: '',
	isLoading: false,
	user: {} as IUser
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
			setIsAuth(state, action: PayloadAction<boolean>){
				state.isAuth = action.payload;
				state.isLoading = false;
			},
			setIsError(state, action: PayloadAction<string>){
				state.error = action.payload;
				state.isLoading = false;
			},
			setIsLoading(state, action: PayloadAction<boolean>){
				state.isLoading = action.payload;
			},
			setUser(state, action: PayloadAction<IUser>){
				debugger;
				state.user = action.payload;
			}
	}
})

export default authSlice.reducer;