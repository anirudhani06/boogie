import './PlaceCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import PlaceImg from './PlaceImg';

const RoomCard = ({ url, id }) => {
  return (
    <div className="RoomCard">
      <button className="add-to-fav flex flex-ai-c flex-jc-c">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
      <Link to={`/place/${id}`} className="image">
        <PlaceImg url={`../src/assets/places/${url}`} />
      </Link>
      <Link to={`/place/${id}`} className="content">
        <span className="location">Kerala,India</span>

        <span className="title">
          This is first accomodation of my tour lets get start my friends
        </span>

        <div className="price">
          <span>
            $250 <small>per night</small>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default RoomCard;
