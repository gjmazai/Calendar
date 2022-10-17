import { Layout, Menu } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";

const NavBar: FC = () => {
	const navigate = useNavigate();
	const items = [
		{ label: "Stas", key: 1, auth: "true", disabled: true },
		{ label: "Login", key: 2, auth: "false" },
		{ label: "Quit", key: 3, auth: "true" },
	];
	const { isAuth } = useTypedSelector((state) => state.auth);
	return (
		<Layout.Header>
			{!isAuth ? (
				<Menu
					mode="horizontal"
					theme="dark"
					selectable={false}
					items={items.filter((el) => el.auth === "false")}
					className="Menu"
					onClick={() => console.log("Quit")}
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
