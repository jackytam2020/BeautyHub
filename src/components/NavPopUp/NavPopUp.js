import React, { useState } from 'react';
import './NavPopUp.scss';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Button from '../atoms/Button/Button';
import {
  HiMenuAlt4,
  HiOutlineX,
  HiChevronRight,
  HiChevronLeft,
} from 'react-icons/hi';

function NavPopUp({ setHamMenuOpen }) {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  return (
    <div className="nav-popup">
      {servicesMenuOpen ? (
        <ul className="nav-popup__services-menu">
          <li
            className="nav-popup__services-menu-item"
            onClick={() => {
              setServicesMenuOpen(false);
            }}
          >
            <HiChevronLeft />
            <p>Back</p>
          </li>
          <li
            className="nav-popup__services-menu-item"
            onClick={() => {
              setHamMenuOpen(false);
            }}
          >
            <Link to={'/nails'}>NAIL</Link>
          </li>
          <li
            className="nav-popup__services-menu-item"
            onClick={() => {
              setHamMenuOpen(false);
            }}
          >
            <Link to={'/hair'}>HAIR</Link>
          </li>
          <li
            className="nav-popup__services-menu-item"
            onClick={() => {
              setHamMenuOpen(false);
            }}
          >
            <Link to={'/brow-lashes'}>BROW & LASHES</Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-popup__menu-items">
          <li
            className="nav-popup__menu-item"
            onClick={() => {
              setServicesMenuOpen(true);
            }}
          >
            <a>Services</a>
            <HiChevronRight />
          </li>

          <li
            className="nav-popup__menu-item"
            onClick={() => {
              setHamMenuOpen(false);
            }}
          >
            <Link to={'/book-details'}>Book</Link>
          </li>
          <li
            className="nav-popup__menu-item"
            onClick={() => {
              setHamMenuOpen(false);
            }}
          >
            <Link to={'/shop'}>Shop</Link>
          </li>
          <li
            className="nav-popup__menu-item"
            onClick={() => {
              setHamMenuOpen(false);
            }}
          >
            <Link to={'/about-us'}>About Us</Link>
          </li>
          <li
            className="nav-popup__menu-item"
            onClick={() => {
              setHamMenuOpen(false);
            }}
          >
            <Link to={'/faq'}>FAQ</Link>
          </li>
        </ul>
      )}

      <div className="nav-popup__menu-book-button">
        <Button
          size={'large'}
          text={'Book Now'}
          onClick={() => {
            window.open(
              'https://www.fresha.com/a/beauty-et-al-toronto-86-yorkville-avenue-lw9w7mpl/booking?menu=true&dppub=true',
              '_blank'
            );
          }}
        />
      </div>
    </div>
  );
}

export default NavPopUp;
