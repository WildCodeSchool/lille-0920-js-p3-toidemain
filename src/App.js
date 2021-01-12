import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import { AppStyle } from "./style";
import Contacter from "./pages/nous-contacter/index";
import About from "./pages/about/index";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import StageUp from "./pages/stageUp/index";
import Pedagogie from "./components/Pedagogie/index";
import Atelier from "./components/Atelier";

function App() {
	return (
		<AppStyle>
			<Reset />
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={About} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contacter" component={Contacter} />
					<Route exact path="/stageup" component={StageUp} />
					<Route exact path="/action/pedagogie" component={Pedagogie} />
					<Route exact path="/action/atelier" component={Atelier} />
				</Switch>
				<Footer />
			</Router>
		</AppStyle>
	);
}

export default App;
