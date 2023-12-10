import { React, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import './assets/sass/style.css';
import './assets/font/font.css';
import { Home } from './Pages/Home';
import { Footer } from './components/Footer';
import { Overlay } from './components/Overlay';
import { Hampop } from './components/Hampop';
import { CartProvider } from './components/Modelscontext';

function App() {

  useEffect(() => {
  document.documentElement.style.setProperty('--headerheight', window.getComputedStyle(document.querySelector("header")).height);
  // document.documentElement.style.setProperty('--footerheight', window.getComputedStyle(document.querySelector("footer")).height);
  }, []);

  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
        <Hampop />
        <Overlay />
      </CartProvider>
    </Router>

  );
}

export default App;

