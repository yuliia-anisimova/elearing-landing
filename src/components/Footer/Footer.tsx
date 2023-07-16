import React from 'react';
import classes from './Footer.module.scss';

const {
  footer__logo: footerLogo,
  'footer__logo-image': footerLogoImage,
  'footer__logo-text': footerLogoText,
  footer__content: footerContent,
  'footer__nav-item': footerNavItem,
  'footer__nav-list': footerNavList,
  'footer__nav-link': footerNavLink,
  footer__info: footerInfo,
  'footer__info-text': footerInfoText,
} = classes;

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={footerContent}>
        <div className={footerLogo}>
          <img
            src="img/logo/logo-gray.svg"
            alt="Logo"
            className={footerLogoImage}
          />
          <p className={footerLogoText}>Taking learning to the next level</p>
        </div>
        <ul className={footerNavList}>
          <li className={footerNavItem}>
            <a href="/" className={footerNavLink}>Home eLearing</a>
            <a href="/" className={footerNavLink}>Price Quote Services</a>
            <a href="/" className={footerNavLink}>Instructional Design</a>
          </li>
          <li className={footerNavItem}>
            <a href="/" className={footerNavLink}>eLearing Development</a>
            <a href="/" className={footerNavLink}>Mobile Learning</a>
            <a href="/" className={footerNavLink}>Product Training</a>
          </li>
          <li className={footerNavItem}>
            <a href="/" className={footerNavLink}>Custom eLearning</a>
            <a href="/" className={footerNavLink}>eLearing for Retail</a>
            <a href="/" className={footerNavLink}>eLearning Packages</a>
            <a href="/" className={footerNavLink}>Contact</a>
          </li>
        </ul>
      </div>
      <div className={footerInfo}>
        <p className={footerInfoText}>Copyright © 2016 eLearing Company</p>
      </div>
    </footer>
  );
};

export default Footer;
