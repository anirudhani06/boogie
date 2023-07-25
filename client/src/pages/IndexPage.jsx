import './IndexPage.scss';
import PlaceCard from '../components/PlaceCard';
import React from 'react';

import { places } from '../places.json';
const IndexPage = () => {
  return (
    <div className="home wrapper py-32">
      {places.map((img, i) => (
        <PlaceCard key={i} url={img.place[0].url} id={i} />
      ))}
    </div>
  );
};

export default IndexPage;
