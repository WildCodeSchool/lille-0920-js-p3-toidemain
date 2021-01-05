import { Reset } from "styled-reset";
import React from "react";
import Header from "./components/Header/index";
import About from "./pages/about/About";
import Footer from "./components/Footer/index";
import AnimStairs from "./components/Stairs/stairs";
function App() {
  return (
    <div>
      <Reset />
      <Header />
      <About />
      <Footer />
      <AnimStairs />
    </div>
  );
}

export default App;
