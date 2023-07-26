import React from 'react';
import classes from './HeroSection.module.scss';
import Header from '../Header/Header';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const {
  hero,
  hero__services: heroServices,
  hero__line: heroLine,
} = classes;

const HeroSection = () => {
  return (
    <section className={hero}>
      <div className={heroServices}>
        <ThemeSwitcher />
      </div>
      <div className={heroLine}></div>
      <Header />
    </section>
  );
};

export default HeroSection;
