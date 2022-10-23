import { Layout, Menu } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";

const NavBar: FC = () => {
	const { isAuth, user } = useTypedSelector((state) => state.authReducer);
	const navigate = useNavigate();
	const { logout } = useActions();

	const items = [
		{ label: user.username, key: 1, auth: "true", disabled: true },
		{ label: "Login", key: 2, auth: "false" },
		{ label: "Quit", key: 3, auth: "true" },
	];

	function onClickLogout() {
		logout();
		navigate(RouteNames.LOGIN);
	}

	return (
		<Layout.Header>
			{!isAuth ? (
				<Menu
					mode="horizontal"
					theme="dark"
					selectable={false}
					items={items.filter((el) => el.auth === "false")}
					className="Menu"
					onClick={() => navigate(RouteNames.LOGIN)}
				/>
			) : (
				<Menu
					mode="horizontal"
					theme="dark"
					selectable={false}
					items={items.filter((el) => el.auth === "true")}
					className="Menu"
					onClick={() => onClickLogout()}
				/>
			)}
		</Layout.Header>
	);
};

export default NavBar;
