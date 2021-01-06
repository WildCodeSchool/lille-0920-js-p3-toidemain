import { Reset } from "styled-reset";
import React from "react";
import Header from "./components/Header/index";
import About from "./pages/about/About";
import Footer from "./components/Footer/index";
import images from "./components/MySlider/img/images";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <About />
      <Footer />
    </>
  );
}

export default App;
