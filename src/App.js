import { Reset } from "styled-reset";
import React from "react";
import Header from "./components/Header/index";
import About from "./pages/about/About";
import Footer from "./components/Footer/index";
import Atelier from "./components/Atelier";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <Atelier />
    </div>
  );
}

export default App;
