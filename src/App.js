import React from "react";
import { Reset } from "styled-reset";
import Footer from "./components/footer/Footer";
import Contacter from "./pages/nous-contacter/Contacter";

function App() {
  return (
    <div>
      <Reset />
      <Contacter />
      <Footer />
    </div>
  );
}

export default App;
