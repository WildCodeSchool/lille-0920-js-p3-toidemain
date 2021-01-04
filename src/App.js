import * as React from "react";
import { Reset } from "styled-reset";
import Header from "./components/Header/index";
import Slider from "./components/MySlider/Slider";
import About from "./pages/about/About";
import Footer from "./components/Footer/index";
import images from "./components/MySlider/img/images";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Slider slides={images} autoPlay={50} />
      <About />
      <Footer />
    </>
  );
}

export default App;
