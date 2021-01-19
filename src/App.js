import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import Contacter from "./pages/nous-contacter/index";
import About from "./pages/about";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Pedagogie from "./components/Pedagogie/index";
import Home from "./pages/home";
import Soutenir from "./pages/soutenir"
import AppStyle from "./style";

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
            <Route exact path="/action/pedagogie" component={Pedagogie} />
            <Route exact path="/soutenir" component={Soutenir} />
          </Switch>
          <Footer />
        </Router>
      </AppStyle>
    </>
  );
}

export default App;
