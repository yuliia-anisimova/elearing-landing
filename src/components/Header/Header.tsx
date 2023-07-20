import React from 'react';
import classes from './Header.module.scss';

const {
  container,
  header,
  'header__nav-list': headerNavList,
  'header__nav-link': headerNavLink,
} = classes;

const Header = () => {
  return (
    <div className={container}>
      <header className={header}>
        <div>
          <img src="img/logo/logo-color.svg" alt="Logo" />
        </div>
        <nav>
          <ul className={headerNavList}>
            <li><a href="/" className={headerNavLink}>Home</a></li>
            <li><a href="/" className={headerNavLink}>Services</a></li>
            <li><a href="/" className={headerNavLink}>Instructional Design</a></li>
            <li><a href="/" className={headerNavLink}>eLearning Development</a></li>
            <li><a href="/" className={headerNavLink}>eLearning Price Quote</a></li>
            <li><a href="/" className={headerNavLink}>eLearning Packages</a></li>
            <li><a href="/" className={headerNavLink}>Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
