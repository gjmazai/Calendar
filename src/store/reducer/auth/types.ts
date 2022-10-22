import { IUser } from './../../../models/IUser';

// интерфейс для типа auth
export interface AuthState{
	isAuth: boolean;
	user: IUser,
	isLoading: boolean;
	error: string;
}