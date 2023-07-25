import './SearchFilter.scss';
import React, { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

const SearchFilter = ({ state }) => {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  useEffect(() => {
    setDestination(state.searchPlace);
    setDate(state.date);
  }, []);

  const handleSearch = () => {
    setDestination('');
  };
  return (
    <div className="SearchFilter">
      <div className="title">
        <span>FILTERS</span>
      </div>
      <hr />
      <div className="filters">
        <div className="destination">
          <label>Destination</label>

          <input
            type="text"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="date-range">
          <label>Select Date</label>
          <div className="date flex flex-ai-c flex-jc-sb" onClick={() => setOpenDate(!openDate)}>
            <span>{`${format(date[0].startDate, 'dd/MM/yyy')}`}</span>
            <span>to</span>
            <span>{`${format(date[0].endDate, 'dd/MM/yyy')}`}</span>
          </div>

          {openDate && (
            <DateRange
              className="date-picker"
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              minDate={new Date()}
            />
          )}
        </div>
        <div className="price-range">
          <div className="flex flex-ai-c flex-jc-c g-12">
            <label htmlFor="">Min Price</label>
            <label htmlFor="">Max Price</label>
          </div>
          <div className="flex flex-ai-c flex-jc-s g-8">
            <input type="number" />
            <input type="number" />
          </div>
        </div>
        <div className="max-guests">
          <label htmlFor="">Max Guests</label>
          <input type="number" defaultValue={1} />
        </div>
        <button className="submit-filter">Submit</button>
      </div>
    </div>
  );
};

export default SearchFilter;
