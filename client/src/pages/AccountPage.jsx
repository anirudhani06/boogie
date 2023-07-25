import './AccountPage.scss';
import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PlacesPage from '../pages/PlacesPage';
import FavouritePage from './FavouritePage';
import ProfilePage from './ProfilePage';
import BookingsPage from './BookingsPage';
const AccountPage = () => {
  const [user, setUser] = useState(true);

  if (!user) {
    return <Navigate to={'/login'} />;
  }

  const { subpage } = useParams();
  const linkClasses = (type = null) => {
    let classes = 'flex flex-ai-c flex-jc-c g-8 ';
    if (type === subpage || (subpage === undefined && type === 'profile')) {
      classes += 'active';
    }
    return classes;
  };

  return (
    <div className="AccountPage wrapper py-32">
      <nav className="nav flex flex-ai-c flex-jc-c g-12">
        <Link className={linkClasses('profile')} to={'/account'}>
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

          <span>My profile</span>
        </Link>

        <Link className={linkClasses('bookings')} to={'/account/bookings'}>
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
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          <span>My bookings</span>
        </Link>
        <Link className={linkClasses('places')} to={'/account/places'}>
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
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span>My accomodations</span>
        </Link>
        <Link className={linkClasses('favourites')} to={'/account/favourites'}>
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
          <span>Favourites</span>
        </Link>
      </nav>

      {subpage === undefined && <ProfilePage />}
      {subpage === 'places' && <PlacesPage />}
      {subpage === 'favourites' && <FavouritePage />}
      {subpage === 'bookings' && <BookingsPage />}
    </div>
  );
};

export default AccountPage;
