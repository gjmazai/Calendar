import { Button, Checkbox, Form, Input } from "antd";
import React, { FC } from "react";
import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useAppDispatch } from "../hooks/usetypedDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";

const LoginForm: FC = () => {
	const { error, isLoading } = useTypedSelector((state) => state.authReducer);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useActions();

	const onFinish = (values: any) => {
		login(username, password);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};
	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
			className="LoginForm"
		>
			<Form.Item
				label="Username"
				name="username"
				rules={[{ required: true, message: "Please input your username!" }]}
			>
				<Input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: "Please input your password!" }]}
			>
				<Input.Password
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Form.Item>
			{error && <div style={{ color: "red", margin: "10px 0 " }}>{error}</div>}

			<Form.Item
				name="remember"
				valuePropName="checked"
				wrapperCol={{ offset: 8, span: 16 }}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button
					type="primary"
					htmlType="submit"
					loading={isLoading}
				>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;

