import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import Contacter from "./pages/nous-contacter/index";
import About from "./pages/about";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Pedagogie from "./components/Pedagogie/index";
import Login from "./pages/login";
import Home from "./pages/home";
import { Redirect } from "react-router-dom";
import Admin from "./pages/admin";
import Actualite from "./pages/actualite";
import { AppStyle } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StageUp from "./pages/stageUp/index";
import Atelier from "./components/Atelier";
import Soutenir from "./pages/soutenir";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  const { id } = useSelector((state) => state.user);
  const isLoggedIn = !!id;

  if (isLoggedIn) {
    return <Route {...props} />;
  } else {
    toast.error("Accès non autorisé");
    return <Redirect to="/" />;
  }
};

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
            <Route path="/admin" component={Admin} />
            <Route exact path="/actualite" component={Actualite} />
          </Switch>
          <Footer />
        </Router>
        <ToastContainer />
      </AppStyle>
    </>
  );
}

export default App;
