import './PlacesPage.scss';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import AddPlace from '../components/AddPlace';
import Accomodations from '../components/Accomodations';

const PlacesPage = () => {
  const { action } = useParams();

  return (
    <div className="PlacesPage">
      {action !== 'new' && (
        <>
          <div className="flex flex-ai-c flex-jc-c">
            <Link to={'/account/places/new'} className="add-new flex flex-ai-c flex-jc-c g-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Add new place
            </Link>
          </div>
          <Accomodations />
        </>
      )}

      {action === 'new' && <AddPlace />}
    </div>
  );
};

export default PlacesPage;
