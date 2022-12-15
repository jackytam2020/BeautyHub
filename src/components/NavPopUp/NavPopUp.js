import React, { useState, useEffect } from 'react';
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
import { FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

function NavPopUp({ hamMenuOpen, setHamMenuOpen, hamMenuRef }) {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const variants = {
    show: { transform: 'translateX(0em)', opacity: 1 },
    hide: { transform: 'translateX(5em)', opacity: 0 },
  };

  return (
    <div
      className={hamMenuOpen ? 'nav-popup' : 'nav-popup--closed'}
      ref={hamMenuRef}
    >
      <div className="nav-popup__top-header">
        <Link to={'/'}>
          <FaHome
            className="nav-popup__logo"
            onClick={() => {
              setHamMenuOpen(false);
            }}
          />
        </Link>
        <HiOutlineX
          className="nav-popup__exit-icon"
          onClick={() => {
            setHamMenuOpen(false);
          }}
        />
      </div>
      {servicesMenuOpen ? (
        <motion.ul
          className="nav-popup__services-menu"
          animate={servicesMenuOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.3 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
          initial={false}
        >
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
        </motion.ul>
      ) : (
        <ul className="nav-popup__menu-items">
          <motion.li
            className="nav-popup__menu-item"
            animate={hamMenuOpen ? 'show' : 'hide'}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.3, duration: 0.2 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.1, duration: 0.05 },
              },
            }}
            initial={false}
            onClick={() => {
              setServicesMenuOpen(true);
            }}
          >
            <a>Services</a>
            <HiChevronRight />
          </motion.li>

          <motion.li
            className="nav-popup__menu-item"
            animate={hamMenuOpen ? 'show' : 'hide'}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.4, duration: 0.3 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.1, duration: 0.05 },
              },
            }}
            initial={false}
            onClick={() => {
              setHamMenuOpen(false);
            }}
          >
            <Link to={'/book-details'}>Book</Link>
          </motion.li>
          <motion.li
            className="nav-popup__menu-item"
            animate={hamMenuOpen ? 'show' : 'hide'}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.5, duration: 0.4 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.1, duration: 0.05 },
              },
            }}
            initial={false}
            onClick={() => {
              setHamMenuOpen(false);
            }}
          >
            <Link to={'/shop'}>Shop</Link>
          </motion.li>
          <motion.li
            className="nav-popup__menu-item"
            animate={hamMenuOpen ? 'show' : 'hide'}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.6, duration: 0.5 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.1, duration: 0.05 },
              },
            }}
            initial={false}
            onClick={() => {
              setHamMenuOpen(false);
            }}
          >
            <Link to={'/about-us'}>About Us</Link>
          </motion.li>
          <motion.li
            className="nav-popup__menu-item"
            animate={hamMenuOpen ? 'show' : 'hide'}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.7, duration: 0.6 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.1, duration: 0.05 },
              },
            }}
            initial={false}
            onClick={() => {
              setHamMenuOpen(false);
            }}
          >
            <Link to={'/faq'}>FAQ</Link>
          </motion.li>
        </ul>
      )}

      <div className="nav-popup__menu-book-button">
        <Button
          color={'pink'}
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
