import { Layout, Menu } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/usetypedDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";
import { AuthActionCreator } from "../store/reducer/auth/action-creator";

const NavBar: FC = () => {
	const { isAuth, user } = useTypedSelector((state) => state.authReducer);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const items = [
		{ label: user.username, key: 1, auth: "true", disabled: true },
		{ label: "Login", key: 2, auth: "false" },
		{ label: "Quit", key: 3, auth: "true" },
	];

	return (
		<Layout.Header>
			{!isAuth ? (
				<Menu
					mode="horizontal"
					theme="dark"
					selectable={false}
					items={items.filter((el) => el.auth === "false")}
					className="Menu"
					onClick={() => dispatch(AuthActionCreator.logout)}
				/>
			) : (
				<Menu
					mode="horizontal"
					theme="dark"
					selectable={false}
					items={items.filter((el) => el.auth === "true")}
					className="Menu"
					onClick={() => navigate(RouteNames.LOGIN)}
				/>
			)}
		</Layout.Header>
	);
};

export default NavBar;
