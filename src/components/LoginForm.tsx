import { Form } from "antd";
import React, { FC } from "react";

const LoginForm: FC = () => {
	const [form] = Form.useForm();
	return (
		<Form form={form}>
			<Form.Item
				label="Username: "
				name="username"
				rules={[{ required: true, message: "Please input your username" }]}
			/>
			<Form.Item
				label="Passwor: "
				name="password"
				rules={[{ required: true, message: "Please input your pasword" }]}
			/>
		</Form>
	);
};

export default LoginForm;

