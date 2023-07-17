import React, { useState } from 'react';
import classes from './AboutProjectForm.module.scss';

const {
  form,
  form__input: formInput,
  form__message: formMessage,
  form__button: formButton,
} = classes;

const AboutProjectForm: React.FC = () => {
  // const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform any necessary form processing or API calls here

    // Clear form inputs
    setName('');
    setEmail('');
    setMessage('');

    // Show modal window
    // setShowModal(true);
  };

  // const handleCloseModal = () => {
  //   setShowModal(false);

  //   // Scroll to top of the page
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  return (
    <form className={form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your Name"
        className={formInput}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter your Email Address"
        className={formInput}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        name="Message"
        className={formMessage}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      >
      </textarea>
      <button type="submit" className={formButton}>
        Send
      </button>
    </form>
  );
};

export default AboutProjectForm;
