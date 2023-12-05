import React, { useState } from 'react';
import Page from '../components/Page';
import CountryList from '../components/CountryList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Page>
      <div>
        <SearchBar onSearch={handleSearch} setSelectedContinent={setSelectedContinent} />
        <CountryList searchTerm={searchTerm} selectedContinent={selectedContinent} />
      </div>
    </Page>
  );
};

export default Home;
