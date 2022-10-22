import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './../../../models/IUser';
import { AuthState } from './types';

const initialState: AuthState = {
	isAuth: false,
	error: '',
	isLoading: false,
	user: {} as IUser
}

// export default function authReducer(state = initialState, action: AuthAction): AuthState{
// 	switch(action.type){
// 		case ActionEnum.SET_AUTH:
// 			return {...state, isAuth: action.payload, isLoading:false}
// 		case ActionEnum.SET_ERROR:
// 			return {...state, error: action.payload, isLoading: false}
// 		case ActionEnum.SET_IS_LOADING:
// 			return {...state, isLoading: action.payload}
// 		case ActionEnum.SET_USER:
// 			return {...state, user: action.payload}
			
// 		default:
// 			return state;
// 	} 
// }

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
				state.user = action.payload;
			}
	}
})

export default authSlice.reducer;