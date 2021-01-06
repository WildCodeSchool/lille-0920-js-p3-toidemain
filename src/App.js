import { Reset } from "styled-reset";
import React from "react";
import Header from "./components/Header/index";
import About from "./pages/about/About";
import Footer from "./components/Footer/index";
import Pedagogie from "./components/Pedagogie/index";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <About />
      <Footer />
      <Pedagogie />
    </div>
  );
}

export default App;
