import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

const Event: FC = () => {
	const [visible, setVisible] = useState(false);
	const { fetchGuests, createEvent, fetchEvents } = useActions();
	const { guests, event} = useTypedSelector((state) => state.eventReducer);
	const {user} = useTypedSelector(state => state.authReducer);

	useEffect(() => {
		fetchGuests();
		fetchEvents(user.username);
	}, []);

	const addNewEvents = (event: IEvent) => {
		setVisible(false);
		createEvent(event);
	}
	return (
		<Layout>
			<EventCalendar events={event} />
			<Row justify="center">
				<Button onClick={() => setVisible(true)}>Add event</Button>
			</Row>
			<Modal
				title="Add event"
				open={visible}
				footer={null}
				onCancel={() => setVisible(false)}
			>
				<EventForm 
				guests={guests}
				submit={addNewEvents}
				/>
			</Modal>
		</Layout>
	);
};

export default Event;
