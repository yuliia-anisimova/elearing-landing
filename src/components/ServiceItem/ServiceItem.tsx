import React from 'react';
import { Service } from '../../types/service';
import classes from './ServiceItem.module.scss';

const {
  'service-item': serviceItem,
  'service-item__image': serviceItemImage,
  'service-item__title': serviceItemTitle,
  'service-item__line': serviceItemLine,
  'service-item__info': serviceItemInfo,
} = classes;

interface Props {
  service: Service;
}

const ServiceItem: React.FC<Props> = ({ service }) => {
  const { image, title, description } = service;

  return (
    <li className={serviceItem}>
      <div className={serviceItemImage}>
        {image}
      </div>
      <h3 className={serviceItemTitle}>{title}</h3>
      <div className={serviceItemLine}></div>
      <p className={serviceItemInfo}>{description}</p>
    </li>
  );
};

export default ServiceItem;
