import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import Contacter from "./pages/nous-contacter/index";
import About from "./pages/About";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import images from "./components/MySlider/img/images";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
