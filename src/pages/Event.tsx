import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useState } from "react";
import EventCalendar from "../components/EventCalendar";

const Event: FC = () => {
	const [visible, setVisible] = useState(false);
	return (
		<Layout>
			<EventCalendar events={[]} />
			<Row justify="center">
				<Button onClick={() => setVisible(true)}>Add event</Button>
			</Row>
			<Modal
				title="Add event"
				open={visible}
				footer={null}
				onCancel={() => setVisible(false)}
			></Modal>
		</Layout>
	);
};

export default Event;

