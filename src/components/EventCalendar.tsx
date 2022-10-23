import { Calendar } from "antd";
import React, { FC } from "react";
import { IEvent } from "../models/IEvent";

interface EventCalendarProp {
	events: IEvent[];
}

const EventCalendar: FC<EventCalendarProp> = () => {
	return <Calendar />;
};

export default EventCalendar;

