import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { ALL_COUNTRIES, FIND_COUNTRY } from '../graphql/graphqlQueries';
import './CountryList.css';

const CountryList = ({ searchTerm, selectedContinent }) => {
  const { loading, error, data } = useQuery(ALL_COUNTRIES);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [getCountryDetails, { loading: countryLoading, data: countryData }] = useLazyQuery(FIND_COUNTRY);
  const [countryImages, setCountryImages] = useState({});

  useEffect(() => {
    const fetchCountryImages = async () => {
      try {
        const apiKey = '41069999-3741a23e37004c6daf9273e19';
        const images = {};

        for (const country of data.countries) {
          const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${country.name}&image_type=photo`);
          const result = await response.json();

          if (result.hits.length > 0) {
            images[country.name] = result.hits[0].webformatURL;
          }
        }

        setCountryImages(images);
      } catch (error) {
        console.error('Error fetching country images:', error);
      }
    };

    if (!loading && !error) {
      fetchCountryImages();
    }
  }, [data, loading, error]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const countries = data.countries
    .filter((country) =>
      country &&
      country.name &&
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedContinent || country.continent.code === selectedContinent.code)
    );

  const handleCardClick = (country) => {
    setSelectedCountry(country);
    getCountryDetails({ variables: { codeSearch: country.code } });
  };

  return (
    <div>
      <h2>Lista de países</h2>
      <div className="card-container">
        {countries.map((country) => (
          <div key={country.code} className="card" onClick={() => handleCardClick(country)}>
            <div>
              <img src={countryImages[country.name] || ''} alt={`Imagen de ${country.name}`} className='' />
              <h3>{country.name}</h3>
              <p>{country.continent.name}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCountry && (
       <div className="modal-overlay">
       <div className="card-modal">
         <button className="close-modal" onClick={() => setSelectedCountry(null)}>
           <span role="img" aria-label="Close">X</span>
         </button>
         <figure className="card-image-container">
           <img src={countryImages[selectedCountry.name] || ''} alt={`Imagen de ${selectedCountry.name}`} className="card-image" />
         </figure>
         <article className="card-content">
           <h2>{selectedCountry.name}</h2>
           <p className="continent">{selectedCountry.continent.name}</p>
           <div className="details">
             <p><strong>Capital:</strong> {selectedCountry.capital}</p>
             {selectedCountry.languages && selectedCountry.languages.length > 0 && (
               <p><strong>Language:</strong> {selectedCountry.languages[0].native}</p>
             )}
             <p><strong>Currency:</strong> {selectedCountry.currency}</p>
           </div>
           <div className="states">
             <strong>States:</strong>
             <textarea
               readOnly
               value={selectedCountry.states.length > 0 ? selectedCountry.states.map(state => state.name).join(', ') : 'No states available'}
               className="textarea-states"
             />
           </div>
         </article>
       </div>
     </div>
        
      )}
    </div>
  );
};

export default CountryList;
