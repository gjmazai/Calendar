import { Badge, Calendar } from "antd";
import { Moment } from "moment";
import React, { FC } from "react";
import { IEvent } from "../models/IEvent";
import { formatDate } from "../utils/date";

interface EventCalendarProp {
	events: IEvent[];
}

const EventCalendar: FC<EventCalendarProp> = (props) => {
	function dateCellRender(value: Moment){
		const formatedDate = formatDate(value.toDate());
		const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)
		return(
			<div>
				{currentDayEvents.map((el, index) => 
					<div key={index}>
						{el.description}
					</div>
				)}
			</div>
		)
	}
	return <Calendar dateCellRender={dateCellRender}/>;
};

export default EventCalendar;

