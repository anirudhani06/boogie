import './BookingsPage.scss';
import React from 'react';
import { places } from '../places.json';
const BookingsPage = () => {
  return (
    <div className="BookingsPage">
      <div className="places">
        <div className="place ">
          <div className="img">
            <img src={`../src/assets/places${places[0].place[0].url}`} alt="" className="w-100" />
          </div>
          <div className="content">
            <h2>This is place title</h2>
            <div className="flex flex-ai-c flex-jc-s g-12">
              <p>20-09-2023</p>
              <p>20-09-2023</p>
            </div>
            <div className="price">
              <span>Number of nights : 3</span>
              <p>
                <span>Total price</span> $2500
              </p>
            </div>
          </div>
        </div>
        <div className="place ">
          <div className="img">
            <img src={`../src/assets/places${places[0].place[0].url}`} alt="" className="w-100" />
          </div>
          <div className="content">
            <h2>This is place title</h2>
            <div className="flex flex-ai-c flex-jc-s g-12">
              <p>20-09-2023</p>
              <p>20-09-2023</p>
            </div>
            <div className="price">
              <span>Number of nights : 3</span>
              <p>
                <span>Total price</span> $2500
              </p>
            </div>
          </div>
        </div>
        <div className="place ">
          <div className="img">
            <img src={`../src/assets/places${places[0].place[0].url}`} alt="" className="w-100" />
          </div>
          <div className="content">
            <h2>This is place title</h2>
            <div className="flex flex-ai-c flex-jc-s g-12">
              <p>20-09-2023</p>
              <p>20-09-2023</p>
            </div>
            <div className="price">
              <span>Number of nights : 3</span>
              <p>
                <span>Total price</span> $2500
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
