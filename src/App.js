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
import Home from "./pages/home";
<<<<<<< HEAD
import { AppStyle } from "./style";
=======
import { AppStyle } from "./style.jsx";
>>>>>>> c8077b5187692d80e53b15881feb586477e63984

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
            <Route exact path="/action/atelier" component={Atelier} />
          </Switch>
          <Footer />
        </Router>
      </AppStyle>
    </>
  );
}

export default App;
