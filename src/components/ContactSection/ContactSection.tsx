import React from 'react';
import AboutProjectForm from '../AboutProjectForm/AboutProjectForm';
import classes from './ContactSection.module.scss';

const {
  contact,
  contact__title: contactTitle,
  contact__info: contactInfo,
} = classes;

const ContactSection: React.FC = () => {
  return (
    <section className={contact}>
      <h2 className={contactTitle}>talk to us about your project</h2>
      <p className={contactInfo}>We will never send spam or add you to a mailing list</p>
      <AboutProjectForm />
    </section>
  );
};

export default ContactSection;
