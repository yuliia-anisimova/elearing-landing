import React from 'react';
import classes from './AboutProjectForm.module.scss';

const {
  form,
  form__input: formInput,
  form__message: formMessage,
  form__button: formButton,
} = classes;

const AboutProjectForm: React.FC = () => {
  return (
    <form className={form}>
      <input
        type="text"
        placeholder="Enter your Name"
        className={formInput}
      />
      <input type="email" placeholder="Enter your Email Address" className={formInput} />
      <textarea name="Message" className={formMessage}></textarea>
      <button type="submit" className={formButton}>Send</button>
    </form>
  );
};

export default AboutProjectForm;
