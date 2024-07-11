import './App.css';
import { Footer } from './components/footer';
import { SearchModal } from './components/modal/searchModal';
import { Header } from './components/nav';
import { StaysList } from './components/staysList';
import React, { useState, useEffect } from 'react';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setModalIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLocationChange = (location) => {
    setLocationFilter(location);
    setModalIsOpen(false); // Cerrar el modal después de seleccionar la ubicación
  };

  return (
    <>
      <div>
        <Header setModalIsOpen={setModalIsOpen} />
        <StaysList locationFilter={locationFilter} />
        <Footer />
        <SearchModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} onLocationChange={handleLocationChange} />
      </div>
    </>
  );
}

export default App;