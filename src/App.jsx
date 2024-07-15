import './App.css';
import { Footer } from './components/footer';
import { SearchModal } from './components/modal/searchModal';
import { Header } from './components/nav';
import { StaysList } from './components/staysList';
import React, { useState, useEffect } from 'react';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [stays, setStays] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [location, setLocation] = useState('');
  const [guest, setGuest]= useState(0)


  const getData = async () => {
    const rs = await fetch('/stays.json');
    const jsonRs = await rs.json();
    setStays(jsonRs);
    setSearchResults(jsonRs);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <Header setModalIsOpen={setModalIsOpen}
        location={location}
        guest={guest}
         />
        <StaysList guest={guest} 
        location={location} 
        searchResults={searchResults}/>
        <Footer />
        <SearchModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          location={location}
          setLocation={setLocation}
          guest={guest}
          setGuest={setGuest}
        />
      </div>
    </>
  );
}

export default App;