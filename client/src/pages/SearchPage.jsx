import './SearchPage.scss';
import React from 'react';
import { places } from '../places.json';
import PlaceCard from '../components/PlaceCard';
import SearchFilter from '../components/SearchFilter';
import { useLocation } from 'react-router-dom';
const SearchPage = () => {
  const { state } = useLocation();
  return (
    <div className="wrapper">
      <div className="SearchPage py-32">
        <section className="filter">
          <div>
            <SearchFilter state={state} />
          </div>
          <div className="places">
            {places.map((img, i) => (
              <PlaceCard key={i} url={img.place[0].url} id={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchPage;
