import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import Contacter from "./pages/nous-contacter/index";
import About from "./pages/about";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Pedagogie from "./components/Pedagogie/index";
import Home from "./pages/home";
<<<<<<< HEAD
import Atelier from "./components/Atelier/index";
=======
import AppStyle from "./style";
>>>>>>> eb01d0daf84c5117310618f5532bc7a9b7413fc0

function App() {
  return (
    <>
      <Reset />
<<<<<<< HEAD
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacter" component={Contacter} />
          <Route exact path="/action/pedagogie" component={Pedagogie} />
          <Route exact path="/action/atelier" component={Atelier} />
        </Switch>
        <Footer />
      </Router>
=======
      <AppStyle>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacter" component={Contacter} />
            <Route exact path="/action/pedagogie" component={Pedagogie} />
          </Switch>
          <Footer />
        </Router>
      </AppStyle>
>>>>>>> eb01d0daf84c5117310618f5532bc7a9b7413fc0
    </>
  );
}

export default App;
