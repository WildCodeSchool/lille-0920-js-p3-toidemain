import { Reset } from "styled-reset";
import React from "react";
import Header from "./components/Header/index";
import About from "./pages/about/About";
import Footer from "./components/Footer/index";
import Drivers from "./components/Drivers/index";

function App() {
	return (
		<div>
			<Reset />
			<Header />
			<Drivers />
			<About />
			<Footer />
		</div>
	);
}

export default App;
