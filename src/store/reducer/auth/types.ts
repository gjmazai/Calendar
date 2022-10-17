
// интерфейс для типа auth
export interface AuthState{
	isAuth: boolean;
}

// перечисление всех action
export enum AuthActionEnum{
	SET_AUTH='SET_AUTH',
}

// интерфейс для action
interface SetAuthState{
	type: AuthActionEnum.SET_AUTH,
	payload: boolean,
}

// Обобщающий интерфейс, при нескольких action's: SetAuthState | SetUser | ....
export type AuthAction = 
	SetAuthState
