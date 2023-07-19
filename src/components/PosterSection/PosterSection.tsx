import React from 'react';
import classes from './PosterSection.module.scss';

const {
  poster,
  poster__content: posterContent,
  poster__line: posterLine,
  poster__info: posterInfo,
  poster__title: posterTitle,
  poster__text: posterText,
  poster__link: posterLink,
  poster__image: posterImage,
} = classes;

const PosterSection = () => {
  return (
    <section className={poster}>
      <div className={posterContent}>
        <div className={posterInfo}>
          <h1 className={posterTitle}>We Design Learning.</h1>
          <p className={posterText}>What We Can Do For You?</p>
          <a href="#/" className={posterLink}>Know more</a>
        </div>
        <img
          src="img/images/poster-2.png"
          alt="poster"
          className={posterImage}
        />
      </div>
      <div className={posterLine}></div>
    </section>
  );
};

export default PosterSection;
