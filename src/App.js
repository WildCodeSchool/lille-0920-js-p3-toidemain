import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import Contacter from "./pages/nous-contacter/index";
import About from "./pages/about/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Pedagogie from "./components/Pedagogie/index";

function App() {
  return (
    <>
      <Reset />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Drivers} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacter" component={Contacter} />
          <Route exact path="/action/pedagogie" component={Pedagogie} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
