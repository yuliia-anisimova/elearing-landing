import React from 'react';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection/ContactSection';

interface Props {
  onClick: () => void;
}

export const Provider: React.FC<Props> = React.memo(
  ({ onClick, children }) => (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  ),
);

export const App: React.FC = () => {
  return (
    <main>
      <ContactSection />
      <Footer />
    </main>
  );
};
