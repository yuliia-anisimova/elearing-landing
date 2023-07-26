/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, useState } from 'react';
import cn from 'classnames';
import classes from './Toggler.module.scss';
import { useTheme } from '../../providers/ThemeContext';

const {
  checkbox,
  checkbox__container: checkboxContainer,
  'checkbox__label-text': checkboxLabelText,
  'checkbox__night-label': checkboxNightLabel,
} = classes;

const Toggler = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { toggleTheme } = useTheme();

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    toggleTheme();
  };

  return (
    <div className={checkboxContainer}>
      <input
        type="checkbox"
        className={checkbox}
        onChange={handleCheckboxChange}
        checked={isChecked}
      />
      {isChecked
        ? <p className={checkboxLabelText}>daymode</p>
        : <p className={cn(checkboxLabelText, checkboxNightLabel)}>nightmode</p>}
    </div>
  );
};

export default Toggler;
