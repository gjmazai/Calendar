import { IUser } from './../../../models/IUser';
import { IEvent } from './../../../models/IEvent';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EventState } from './types';

const initialState: EventState = {
	event: [],
	guests: [],
	error: "",
}

export const eventSlice = createSlice({
	name: 'event',
	initialState,
	reducers: {
		setEvent(state, action: PayloadAction<IEvent[]>){
			state.event = action.payload;
		},
		setGuest(state, action: PayloadAction<IUser[]>){
			state.guests = action.payload;
		},
		setError(state, action: PayloadAction<string>){
			state.error = action.type;
		}
	}
})

export default eventSlice.reducer;