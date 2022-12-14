import './App.scss';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import CartPopOut from './components/CartPopOut/CartPopOut';

import HomePage from './pages/HomePage/HomePage';
// import Nail from './pages/Nail/Nail';
import Hair from './pages/Hair/Hair';
import BrowLashes from './pages/BrowLashes/BrowLashes';
import BookDetails from './pages/BookDetails/BookDetails';
// import Shop from './pages/Shop/Shop';
import ProductListing from './pages/ProductListing/ProductListing';
import AboutUs from './pages/AboutUs/AboutUs';
import FAQ from './pages/FAQ/FAQ';
import Cart from './pages/Cart/Cart';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess';

import CartProvider from './CartContext';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  let test = window.screen.width - 400;

  if (window.screen.width < 768) {
    test = 0;
  }

  const Nail = lazy(() => import('./pages/Nail/Nail'));
  const Shop = lazy(() => import('./pages/Shop/Shop'));

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app">
          <div className="app__nav">
            <NavBar setCartIsOpen={setCartIsOpen} />
          </div>

          <motion.div
            animate={{
              x: cartIsOpen ? test : '100%',
              position: 'sticky',
            }}
            style={{ top: 0 }}
            initial={{ x: '100%' }}
            className={'app__pop-up-container'}
          >
            <CartPopOut setCartIsOpen={setCartIsOpen} />
          </motion.div>
          <Suspense fallback={<h1>loading...</h1>}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/nails" element={<Nail />} />
              <Route path="/hair" element={<Hair />} />
              <Route path="/brow-lashes" element={<BrowLashes />} />
              <Route path="/shop" element={<Shop />} />
              <Route
                path="/product-listing/:productID"
                element={<ProductListing />}
              />
              <Route path="/book-details" element={<BookDetails />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/success" element={<PaymentSuccess />} />
            </Routes>
          </Suspense>
          <div className="app__footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
