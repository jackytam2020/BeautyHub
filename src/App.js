import './App.scss';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import Nail from './pages/Nail/Nail';
import Hair from './pages/Hair/Hair';
import BrowLashes from './pages/BrowLashes/BrowLashes';
import BookDetails from './pages/BookDetails/BookDetails';
import Shop from './pages/Shop/Shop';
import ProductListing from './pages/ProductListing/ProductListing';
import AboutUs from './pages/AboutUs/AboutUs';
import FAQ from './pages/FAQ/FAQ';
import Cart from './pages/Cart/Cart';

import CartProvider from './CartContext';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app">
          <div className="app__nav">
            <NavBar />
          </div>
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
          </Routes>
          <div className="app__footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
