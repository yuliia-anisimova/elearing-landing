import React, { useState, useEffect } from 'react';
import Folders from '../icons/folders/folders';
import Computer from '../icons/computer';
import Mobile from '../icons/mobile/mobile';
import Chat from '../icons/chat';
import { Service } from '../../types/service';
import ServicesList from '../ServicesList/ServicesList';
import classes from './ServicesSection.module.scss';
import Search from '../icons/search/search';
import { useTheme } from '../../providers/ThemeContext';
import SearchLight from '../icons/searchLight/searchLight';

const {
  'services-section': servicesSection,
  'services-section__title': servicesSectionTitle,
  'services-section__search': servicesSectionSearch,
  'services-section__search-input': servicesSectionSearchInput,
} = classes;

const services: Service[] = [
  {
    id: 1,
    image: <Folders />,
    title: 'instructional design',
    description: 'We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.',
  },
  {
    id: 2,
    image: <Computer />,
    title: 'learing development',
    description: 'The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.',
  },
  {
    id: 3,
    image: <Mobile />,
    title: 'mobile learning',
    description: 'Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.',
  },
  {
    id: 4,
    image: <Chat />,
    title: 'instructor-led learining',
    description: 'We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations.',
  },
];

const ServicesSection = () => {
  const [visibleServices, setVisibleservices] = useState<Service[]>(services);
  const [query, setQuery] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    if (query.length > 0) {
      const filteredServices = services.filter((service) => {
        const serviceTitle = service.title.toLowerCase();

        return serviceTitle.includes(query.toLowerCase());
      });

      setVisibleservices(filteredServices);
    } else {
      setVisibleservices(services);
    }
  }, [query]);

  return (
    <section className={servicesSection}>
      <h2 className={servicesSectionTitle}>Services We Provide</h2>
      <form className={servicesSectionSearch}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className={servicesSectionSearchInput}
          placeholder="Search"
        />
        {theme === 'dark'
          ? <SearchLight />
          : <Search />}
      </form>
      <ServicesList services={visibleServices} />
    </section>
  );
};

export default ServicesSection;
