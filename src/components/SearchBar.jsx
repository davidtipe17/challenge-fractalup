import React, { useState } from 'react';
import ContinentModal from './ContinentModal';
import './SearchBar.css';

const SearchBar = ({ onSearch, setSelectedContinent }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showContinentsModal, setShowContinentsModal] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputClick = () => {
    setShowContinentsModal(true);
  };

  const handleCloseModal = () => {
    setShowContinentsModal(false);
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-container">
        <h3>Pais</h3>
        <input
          type="text"
          placeholder="Buscar país..."
          value={searchTerm}
          onChange={handleChange}
          onClick={handleInputClick}
          className="search-input"
        />
      </div>
      <button onClick={handleSearch} className="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        Buscar
      </button>
      {showContinentsModal && <ContinentModal onClose={handleCloseModal} onContinentSelect={setSelectedContinent} />}
    </div>
  );
};

export default SearchBar;
