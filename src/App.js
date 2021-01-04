import React from 'react';
import { Reset } from 'styled-reset';
import Contacter from './pages/nous-contacter/Contacter';
import About from './pages/about/About';
import Footer from './components/footer/index';
import Header from './components/Header/index';

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <Contacter />
      <About />
      <Footer />
    </div>
  );
}

export default App;
