import React from 'react';
import classes from './ThemeSwitcher.module.scss';
import Toggler from '../Toggler/Toggler';

const {
  'theme-switcher': themeSwitcher,
  'theme-switcher__logo': themeSwitcherLogo,
  'theme-switcher__title': themeSwitcherTitle,
} = classes;

const ThemeSwitcher = () => {
  return (
    <div className={themeSwitcher}>
      <div className={themeSwitcherLogo}>
        <img src="img/logo/logo-color-2.svg" alt="Logo" />
      </div>
      <p className={themeSwitcherTitle}>Taking Learning to the Next Level</p>
      <Toggler />
    </div>
  );
};

export default ThemeSwitcher;
