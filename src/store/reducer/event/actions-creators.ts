import { IEvent } from './../../../models/IEvent';
import { eventSlice } from './index';
import UserService from '../../../api/UserService';
import { AppDispatch } from './../../store';

export const EventActionCreator = {
	fetchGuests: () => async (dispatch: AppDispatch) => {
		try {
			const guests = (await UserService.getUsers()).data;
			dispatch(eventSlice.actions.setGuest(guests));
		} catch (error) {
			console.log(error);
		}
	},
	createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
		try {
			const events = localStorage.getItem('events') || '[]';
			const json = JSON.parse(events) as IEvent[];
			json.push(event);
			dispatch(eventSlice.actions.setEvent(json));
			localStorage.setItem('events', JSON.stringify(json));
		} catch (error) {
			console.log(error);
		}
	},
	fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
		try {
			const events = localStorage.getItem('events') || '[]';
			const json = JSON.parse(events) as IEvent[];
			const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
			dispatch(eventSlice.actions.setEvent(currentUserEvents));
		} catch (error) {
			console.log(error);
		}
	}
}