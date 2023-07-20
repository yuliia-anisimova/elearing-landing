import React from 'react';
import { Service } from '../../types/service';
import ServiceItem from '../ServiceItem/ServiceItem';
import classes from './ServicesList.module.scss';

const {
  'services-list': servicesList,
} = classes;

interface Props {
  services: Service[];
}

const ServicesList: React.FC<Props> = ({ services }) => {
  return (
    <ul className={servicesList}>
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </ul>
  );
};

export default ServicesList;
