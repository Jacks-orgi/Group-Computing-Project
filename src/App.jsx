import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Founders from './components/Founders/Founders';
import Header from './components/Header/Header';
import LinkCard from './components/LinkCard/LinkCard';
import PlushieCardContent from './components/LinkCard/PlushieCardContent';
import SquishyCardContent from './components/LinkCard/SquishyCardContent';
import Mission from './components/Mission/Mission';
import Navbar from './components/Navbar/Navbar';
import { DropdownProvider } from './context/DropdownContext';
import ProductPage from './pages/ProductPage'; // Import the new ProductPage component
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <DropdownProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <div className="content">
                  <div className="links-section">
                    <LinkCard title="Plushies" filter="plushies">
                      <PlushieCardContent />
                    </LinkCard>
                    <LinkCard title="Stress Helpers" filter="stress-helpers">
                      <SquishyCardContent />
                    </LinkCard>
                  </div>
                  <Founders />
                  <Mission />
                </div>
              </>
            } />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductPage />} /> {/* New Product Page Route */}
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
          <Footer />
        </div>
      </DropdownProvider>
    </Router>
  );
}

export default App;