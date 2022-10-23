import React, { useEffect } from "react";

import { Layout } from "antd";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

import "./App.css";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";

function App() {
	const { setUser, setIsAuth } = useActions();
	useEffect(() => {
		if (localStorage.getItem("auth")) {
			setUser({ username: localStorage.getItem("username" || "") } as IUser);
			setIsAuth(true);
		}
	}, []);

	return (
		<Layout>
			<NavBar />
			<Layout.Content>
				<AppRouter />
			</Layout.Content>
			<Layout.Footer></Layout.Footer>
		</Layout>
	);
}

export default App;

