import { IUser } from './../../../models/IUser';
import { IEvent } from "../../../models/IEvent";

export interface EventState {
	guests: IUser[];
	event: IEvent[];
	error: string;
}