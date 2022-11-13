import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { Moment } from "moment";
import React, { FC, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";
import { IUser } from "../models/IUser";
import { formatDate } from "../utils/date";

interface EventFormProps {
	guests: IUser[];
	submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = (props) => {
	const [event, setEvent] = useState<IEvent>({
		author: "",
		date: "",
		description: "",
	} as IEvent);
	const {user} = useTypedSelector(state => state.authReducer)

	const selectDate = (date: Moment | null) => {
		if(date){
			setEvent({...event, date:formatDate(date.toDate())});
		}
		
	};
	const onFinish = (values: any) => {
		props.submit({...event, author: user.username});		
	};
	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 10 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
			className="LoginForm"
		>
			<Form.Item
				label="Event name"
				name="input"
				rules={[{ required: true, message: "Обязательное поле" }]}
			>
				<Input
					value={event.description}
					onChange={(e) => setEvent({ ...event, description: e.target.value })}
				/>
			</Form.Item>
			<Form.Item
				label="Date event"
				name="description"
				rules={[{ required: true, message: "Обязательное поле" }]}
			>
				<DatePicker onChange={(date) => selectDate(date)} />
			</Form.Item>

			<Form.Item
				label="Date event"
				name="guest"
				rules={[{ required: true, message: "Обязательное поле" }]}
			>
				<Select onChange={(guest: string) => setEvent({ ...event, guest })}>
					{props.guests.map((el) => (
						<Select.Option
							key={el.username}
							value={el.username}
						>
							{el.username}
						</Select.Option>
					))}
				</Select>
			</Form.Item>

			<Row justify="end">
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
					>
						Create
					</Button>
				</Form.Item>
			</Row>
		</Form>
	);
};

export default EventForm;

