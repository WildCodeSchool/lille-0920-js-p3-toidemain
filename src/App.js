import { Reset } from "styled-reset";
import React from "react";
import Header from "./components/Header/index";
import About from "./pages/about/About";

function App() {
	return (
		<div>
			<Reset />
			<Header />
			<About />
		</div>
	);
}

export default App;
