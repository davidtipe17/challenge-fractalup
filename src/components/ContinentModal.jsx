import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_CONTINENTS } from '../graphql/graphqlQueries';
import './ContinentModal.css';

const ContinentModal = ({ onClose, onContinentSelect }) => {
  const { loading, error, data } = useQuery(ALL_CONTINENTS);
  const [continentImages, setContinentImages] = useState({});

  useEffect(() => {
    const fetchContinentImages = async () => {
      try {
        const apiKey = '41069999-3741a23e37004c6daf9273e19';
        const images = {};

        for (const continent of data.continents) {
          const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${continent.name}&image_type=photo`);
          const result = await response.json();

          if (result.hits.length > 0) {
            images[continent.name] = result.hits[0].webformatURL;
          }
        }

        setContinentImages(images);
      } catch (error) {
        console.error('Error fetching continent images:', error);
      }
    };

    if (!loading && !error) {
      fetchContinentImages();
    }
  }, [data, loading, error]);

  if (loading) return <p>Cargando continentes...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="modal">
      <button onClick={onClose}>Cerrar</button>
      <h3>Continentes</h3>
      <div className="grid-container">
        {data.continents.map((continent) => (
          <div key={continent.code} className="card" onClick={() => onContinentSelect(continent)}>
            <img src={continentImages[continent.name] || ''} alt={`Imagen de ${continent.name}`} />
            <h4>{continent.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinentModal;

