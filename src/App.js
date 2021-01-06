import { Reset } from "styled-reset";
import React from "react";
import Header from "./components/Header/index";
import About from "./pages/about/About";
import Footer from "./components/Footer/index";
import KeyFacts from "./components/KeyFacts";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <KeyFacts />
      <About />
      <Footer />
    </div>
  );
}

export default App;
