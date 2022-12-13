import React, { useState, useContext } from 'react';
import './NavBar.scss';
import Logo from '../../assets/images/logo.png';
import Button from '../atoms/Button/Button';
import NavPopUp from '../NavPopUp/NavPopUp';

import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import {
  HiMenuAlt4,
  HiOutlineX,
  HiChevronRight,
  HiChevronLeft,
  HiShoppingCart,
} from 'react-icons/hi';

function NavBar(props) {
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const cart = useContext(CartContext);
  const itemsCount = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  //disable scroll when popup menu opens
  hamMenuOpen ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <nav
      className="nav-bar"
      onMouseLeave={() => {
        setServicesMenuOpen(false);
      }}
    >
      <div className="nav-bar__container">
        <div className="nav-bar__left">
          <Link to={'/'}>
            <img
              src={Logo}
              className="nav-bar__logo"
              alt="beauty et al logo"
              onMouseEnter={() => {
                setServicesMenuOpen(false);
              }}
            />
          </Link>
          <ul className="nav-bar__nav-links">
            <li
              className="nav-bar__link-items nav-bar__services-link"
              onMouseEnter={() => {
                setServicesMenuOpen(true);
              }}
            >
              <p>Services</p>
              {servicesMenuOpen ? (
                <div
                  className="nav-bar__more-services"
                  onMouseLeave={() => {
                    setServicesMenuOpen(false);
                  }}
                >
                  <span>
                    <Link to={'/hair'}>HAIR</Link>
                  </span>
                  <span>
                    <Link to={'/nails'}>NAIL</Link>
                  </span>
                  <span>
                    <Link to={'/brow-lashes'}>BROW & LASHES</Link>
                  </span>
                </div>
              ) : (
                <div className="nav-bar__more-services--hidden"></div>
              )}
            </li>

            <li
              className="nav-bar__link-items"
              onMouseEnter={() => {
                setServicesMenuOpen(false);
              }}
            >
              <Link to={'/book-details'}>Book</Link>
            </li>
            <li className="nav-bar__link-items">
              <Link to={'/shop'}>Shop</Link>
            </li>
            <li className="nav-bar__link-items">
              <Link to={'/about-us'}>About Us</Link>
            </li>
            <li className="nav-bar__link-items">
              <Link to={'/faq'}>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="nav-bar__right">
          <Link to={'/cart'}>
            <div className="nav-bar__cart-button">
              <HiShoppingCart className="nav-bar__cart-icon" />
              <p className="nav-bar__cart-counter">
                {itemsCount > 0 && itemsCount}
              </p>
            </div>
          </Link>
          <div className="nav-bar__book-button">
            <a
              target="_blank"
              href="https://www.fresha.com/a/beauty-et-al-toronto-86-yorkville-avenue-lw9w7mpl/booking?menu=true&dppub=true"
            >
              <Button text={'BOOK NOW'} size={'regular'} />
            </a>
          </div>

          <div className="nav-bar__hamburger-menu">
            <div
              onClick={() => {
                setHamMenuOpen(!hamMenuOpen);
              }}
            >
              {hamMenuOpen ? <HiOutlineX /> : <HiMenuAlt4 />}
            </div>
          </div>
        </div>
      </div>
      {hamMenuOpen && <NavPopUp setHamMenuOpen={setHamMenuOpen} />}
    </nav>
  );
}

export default NavBar;
