import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faHeart, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/home/logo.png';
import MenuOverlay from './MenuOverlay';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="lv-header">
      <div className="lv-header__top lv-header__row">
        <div className="lv-header__left lv-header__row">

          <button className="lv-header__menu" aria-label="Menu" onClick={() => setOpenMenu(true)}>
            <FontAwesomeIcon className="bars" icon={faBars} size="lg" />
            <span className="lv-header__menu-label">Menu</span>
          </button>
          <a href="#search" className="lv-header__search">
            <FontAwesomeIcon href="#search" icon={faSearch} size="lg" className="lv-header__search-icon" />
            <span className="lv-header__search-label">Que recherchez-vous ?</span>
          </a>
        </div>
        <a href="/">
          <div className="lv-header__logo">
            <img src={logo} alt="Louis Vuitton" className="lv-header__logo-img" />
          </div>
        </a>
        <div className="lv-header__right lv-header__row">
          <a href="#contact" className="lv-header__contact">Contactez-nous</a>
          <a href="#wishlist" className="lv-header__icon-heart">
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </a>
          <a href="#account" className="lv-header__icon">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </a>
          <a href="#cart" className="lv-header__bag-wrapper">
            <FontAwesomeIcon icon={faBagShopping} size="lg" className="lv-header__icon" />
            <span className="lv-header__bag-count">0</span>
          </a>
        </div>
      </div>
      <MenuOverlay open={openMenu} onClose={() => setOpenMenu(false)} />
    </header>
  );
}
