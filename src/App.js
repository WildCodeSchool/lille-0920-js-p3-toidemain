import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import Contacter from "./pages/nous-contacter/index";
import About from "./pages/about/About";
import Footer from "./components/footer/index";
import Header from "./components/Header/index";

function App() {
  return (
    <div>
      <Reset />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacter" component={Contacter} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
