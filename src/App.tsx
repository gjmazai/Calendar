import React from "react";

import { Layout } from "antd";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
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
