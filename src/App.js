import React from "react";
import { Reset } from "styled-reset";
import About from "./pages/about/About";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div>
      <Reset />
      <About />
      <Footer />
    </div>
  );
}

export default App;
