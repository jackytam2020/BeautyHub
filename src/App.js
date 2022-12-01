import './App.scss';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import Nail from './pages/Nail/Nail';
import Hair from './pages/Hair/Hair';
import BrowLashes from './pages/BrowLashes/BrowLashes';
import BookDetails from './pages/BookDetails/BookDetails';
import AboutUs from './pages/AboutUs/AboutUs';
import FAQ from './pages/FAQ/FAQ';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
function App() {
  return (
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
          <Route path="/book-details" element={<BookDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
