import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import Contacter from "./pages/nous-contacter/index";
import About from "./pages/about/index";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import StageUp from "./pages/stageUp/index";
import Pedagogie from "./components/Pedagogie/index";
import Atelier from "./components/Atelier";
import Login from "./pages/login";
import Home from "./pages/home";
import Soutenir from "./pages/soutenir";
import { AppStyle } from "./style";

function App() {
	return (
		<>
			<Reset />
			<AppStyle>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contacter" component={Contacter} />
						<Route exact path="/action/stageup" component={StageUp} />
						<Route exact path="/action/pedagogie" component={Pedagogie} />
						<Route exact path="/soutenir" component={Soutenir} />
						<Route exact path="/action/atelier" component={Atelier} />
						<Route exact path="/login" component={Login} />
					</Switch>
					<Footer />
				</Router>
			</AppStyle>
		</>
	);
}

export default App;
