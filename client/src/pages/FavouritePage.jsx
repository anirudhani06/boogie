import './FavouritePage.scss';
import React from 'react';
import PlaceCard from '../components/PlaceCard';
import { places } from '../places.json';

const FavouritePage = () => {
  return (
    <div className="FavouritePage">
      {places.slice(0, 4).map((img, i) => (
        <PlaceCard key={i} url={img.place[0].url} id={i} />
      ))}
    </div>
  );
};

export default FavouritePage;
