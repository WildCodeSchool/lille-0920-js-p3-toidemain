<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Contacter from './pages/nous-contacter/index';
import About from './pages/about';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Pedagogie from './components/Pedagogie/index';
import Home from './pages/home';
import { AppStyle } from './style';
=======
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
import Soutenir from "./pages/soutenir";
import { AppStyle } from "./style";
>>>>>>> 9db98386ef0e21f40ef8f5c454f36b01d1031d87

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
          </Switch>
          <Footer />
        </Router>
      </AppStyle>
    </>
  );
}

export default App;
