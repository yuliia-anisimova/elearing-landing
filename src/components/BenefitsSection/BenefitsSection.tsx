/* eslint-disable max-len */
import React from 'react';
import classes from './BenefitsSection.module.scss';

const {
  benefits,
  benefits__title: benefitsTitle,
  benefits__info: benefitsInfo,
  benefits__image: benefitsImage,
  'benefits__info-title': benefitsInfoTitle,
  'benefits__info-text': benefitsInfoText,
  benefits__list: benefitsList,
  'benefits__list-item': benefitsListItem,
  'benefits__list-text': benefitsListText,
} = classes;

const BenefitsSection: React.FC = () => {
  return (
    <section className={benefits}>
      <h2 className={benefitsTitle}>Instructional Design</h2>
      <div className={benefitsInfo}>
        <div className={benefitsImage}>
          <img src="/img/images/benefits-1.png" alt="People" />
        </div>
        <div>
          <h3 className={benefitsInfoTitle}>We know learning inside and out</h3>
          <p className={benefitsInfoText}>
            Our instructional design team will work hard to align your business goals with your learning objectives to ensure the training supports your business strategies.
          </p>
          <ul className={benefitsList}>
            <li className={benefitsListItem}>
              <img src="img/icons/tick.svg" alt="Tick" />
              <p className={benefitsListText}>Each project requires a unique approach, and we are ready for the challenge</p>
            </li>
            <li className={benefitsListItem}>
              <img src="img/icons/tick.svg" alt="Tick" />
              <p className={benefitsListText}>Our expertise in the training and developmant industry will make our project a success</p>
            </li>
            <li className={benefitsListItem}>
              <img src="img/icons/tick.svg" alt="Tick" />
              <p className={benefitsListText}>Your goals and deadlines are our priority</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={benefitsInfo}>
        <div>
          <h3 className={benefitsInfoTitle}>Our clients love the work we do</h3>
          <p className={benefitsInfoText}>
            We pride ourselves on developing training strategies with the learners in mind, ensuring your time and resources are well utilized.
          </p>
          <ul className={benefitsList}>
            <li className={benefitsListItem}>
              <img src="img/icons/tick.svg" alt="Tick" />
              <p className={benefitsListText}>We start each project with a careful analysiys of your learning needs</p>
            </li>
            <li className={benefitsListItem}>
              <img src="img/icons/tick.svg" alt="Tick" />
              <p className={benefitsListText}>We constantly look for ways to save your time and money while exceeding your expectations</p>
            </li>
            <li className={benefitsListItem}>
              <img src="img/icons/tick.svg" alt="Tick" />
              <p className={benefitsListText}>We don&apos;t stop working until you are satisfied with the products we deliver</p>
            </li>
          </ul>
        </div>
        <div className={benefitsImage}>
          <img src="/img/images/benefits-2.png" alt="People" />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
