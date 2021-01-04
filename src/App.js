import React from 'react';
import { Reset } from 'styled-reset';
import Contacter from './pages/nous-contacter/Contacter';
import About from './pages/about/About';
import Footer from './components/footer/index';

function App() {
  return (
    <div>
      <Reset />
      <Contacter />
      <About />
      <Footer />
    </div>
  );
}

export default App;
