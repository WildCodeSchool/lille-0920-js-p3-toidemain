import * as React from "react";
import { Reset } from "styled-reset";
import Slider from "./components/MySlider/Slider";
import images from "./components/MySlider/img/images";
import About from "./pages/about/About";
import Footer from "./components/Footer/index";

function App() {
  return (
    <>
      <Reset />
      <Slider slides={images} autoPlay={50} />
      <About />
      <Footer />
    </>
  );
}

export default App;
