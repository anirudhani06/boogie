import './HostProfilePage.scss';
import React from 'react';

import PlaceCard from '../components/PlaceCard';
import { places } from '../places.json';
import HostCard from '../components/HostCard';

const HostProfilePage = () => {
  return (
    <div className="wrapper">
      <div className="HostProfilePage  py-32">
        <div className="host-details">
          <HostCard />
        </div>
        <div className="hosted-places">
          <div className="places">
            {places.slice(0, 7).map((img, i) => (
              <PlaceCard key={i} url={img.place[0].url} id={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostProfilePage;
