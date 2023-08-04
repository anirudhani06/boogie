import './PlacePage.scss';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { places } from '../places.json';
import { Link, useParams } from 'react-router-dom';

const PlacePage = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const { id } = useParams();
  const x = places[Number(id)];

  if (showAllPhotos) {
    return (
      <div className="container">
        <div className="wrapper">
          <div className=" show-all-photos">
            <button
              type="button"
              className="close flex-ai-c flex-jc-s"
              onClick={() => setShowAllPhotos(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="images">
              {x.place.map((img, i) => (
                <img src={`../src/assets/places/${img.url}`} alt="" key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="PlacePage py-32">
      <div className="wrapper">
        <div className="title flex flex-ai-c flex-jc-sb">
          <h2>This is title of my tour is title of my tour</h2>
          <button type="button" className="favourite">
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
        </div>
        <div className="flex flex-ai-c flex-jc-s g-12">
          <div className="location flex flex-ai-c flex-jc-s">
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <Link to={'/home'}>Kerala,India</Link>
          </div>
          <div className="host flex flex-ai-c flex-jc-s">
            <span>HOST: </span>
            <Link to={'/host/sd'}>anirudh</Link>
          </div>
        </div>
        <div className="image-container">
          <div className="tumbnail">
            <img src={`../src/assets/places/${x.place[0].url}`} alt="" />
          </div>
          <div className="subimg">
            <div className="img">
              <img src={`../src/assets/places/${x.place[1].url}`} alt="" />
            </div>
            <div className="img">
              <img src={`../src/assets/places/${x.place[2].url}`} alt="" />
            </div>
            <div className="img">
              <img src={`../src/assets/places/${x.place[3].url}`} alt="" />
            </div>
            <div className="img">
              <img src={`../src/assets/places/${x.place[4].url}`} alt="" />
            </div>
          </div>
          <button
            className="show-more-photos flex flex-ai-c flex-jc-c g-8"
            type="button"
            onClick={() => setShowAllPhotos(true)}
          >
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
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            Show more photos
          </button>
        </div>
        <div className="extras">
          <div className="details">
            <div className="description">
              <div className="title">
                <h2>About this place</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi sed
                obcaecati libero non officiis rem fugit iure, quaerat sunt velit veritatis
                reprehenderit deleniti adipisci. Corporis obcaecati molestias ullam molestiae, eaque
                reprehenderit architecto eum. Atque necessitatibus libero eum porro. Voluptatibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi sed
                obcaecati libero non officiis rem fugit iure, quaerat sunt velit veritatis
                reprehenderit deleniti adipisci. Corporis obcaecati molestias ullam molestiae, eaque
                reprehenderit architecto eum. Atque necessitatibus libero eum porro. Voluptatibus.
              </p>
            </div>
            <div className="date">
              <p>
                Maximum guests <span>5</span>
              </p>
            </div>
            <hr />
            <div className="extra-perks">
              <div className="title">
                <h2>What this place offers</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <ul>
                  <li className="flex flex-ai-c flex-jc-s g-12">
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
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>

                    <span>High speed internet</span>
                  </li>
                  <li className="flex flex-ai-c flex-jc-s g-12">
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
                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                      />
                    </svg>

                    <span>Dedicated workspace</span>
                  </li>
                  <li className="flex flex-ai-c flex-jc-s g-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      width="512"
                      height="512"
                    >
                      <path d="M19.5,0H4.5C2.019,0,0,2.019,0,4.5v2c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5v-2c0-2.481-2.019-4.5-4.5-4.5Zm3.5,6.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5v-2c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v2Zm-3,0c0,.276-.224,.5-.5,.5H4.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h15c.276,0,.5,.224,.5,.5Zm-7.5,7v10c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V13.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5Zm-5.5-.003l1,.007s-.038,5.341-.038,6.997c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5c0-1.534,.981-2.994,2.334-3.472,.257-.091,.546,.044,.638,.305,.092,.26-.045,.546-.306,.638-.949,.335-1.666,1.422-1.666,2.528,0,1.378,1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5c0-1.658,.038-7.003,.038-7.003Zm16,7.003c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5v-7c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v7c0,1.378,1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5c0-1.106-.717-2.193-1.667-2.528-.26-.092-.396-.378-.305-.638,.093-.26,.378-.394,.639-.305,1.352,.478,2.333,1.938,2.333,3.472Z" />
                    </svg>

                    <span>Air conditioner</span>
                  </li>
                  <li className="flex flex-ai-c flex-jc-s g-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                    >
                      <path d="m21.3,11.077l1.312-1.018c.263-.204.408-.526.385-.858s-.209-.632-.499-.798L8.797.51C7.857-.016,6.771-.142,5.734.158c-1.035.299-1.889.985-2.403,1.932l-.844,1.552c-1.034,1.9-.345,4.317,1.526,5.382l5.658,3.299-1.209,3.626c-.409,1.227-1.553,2.051-2.846,2.051h-3.617v-3c0-.552-.448-1-1-1s-1,.448-1,1v8c0,.552.448,1,1,1s1-.448,1-1v-3h3.617c2.155,0,4.062-1.374,4.743-3.418l1.077-3.229,2.878,1.678c.612.348,1.288.525,1.972.525.367,0,.737-.051,1.101-.154.357-.102.693-.249,1.001-.437l1.592.883c.591.328,1.336.111,1.66-.482l.844-1.547c.321-.588.107-1.324-.479-1.649l-1.137-.63c.118-.176.263-.33.431-.461Zm-4.46,2.4c-.521.148-1.066.082-1.527-.18L5.011,7.291c-.94-.535-1.284-1.744-.768-2.694l.844-1.552c.257-.474.684-.816,1.202-.966.186-.053.374-.08.561-.08.335,0,.665.084.959.25l12.4,7.143-.135.105c-.438.339-.794.758-1.06,1.245l-.966,1.77c-.259.475-.688.818-1.208.966Z" />
                    </svg>

                    <span>Security camera</span>
                  </li>
                  <li className="flex flex-ai-c flex-jc-s g-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      width="512"
                      height="512"
                    >
                      <path d="M19,1a4.939,4.939,0,0,0-2.713.8,6,6,0,0,0-8.574,0A4.939,4.939,0,0,0,5,1a5,5,0,0,0-1,9.9V24H20V10.9A5,5,0,0,0,19,1ZM18,22H6V19H18ZM19,9H18v8H6V9H5A3,3,0,0,1,5,3a2.972,2.972,0,0,1,2.14.9L8,4.777l.686-1.013a4,4,0,0,1,6.634,0L16,4.777,16.86,3.9A2.972,2.972,0,0,1,19,3a3,3,0,0,1,0,6Z" />
                    </svg>

                    <span>Kitchen</span>
                  </li>
                </ul>
                <ul>
                  <li className="flex flex-ai-c flex-jc-s g-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      width="512"
                      height="512"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.92,10.23l-.01-.016-4.383-6.288c-.841-1.206-2.221-1.926-3.691-1.926h-4.836c-1.858,0-3.55,1.167-4.208,2.905L1.662,10.523c-.997,.618-1.662,1.721-1.662,2.977v2.5c0,1.103,.897,2,2,2v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h8v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1c1.103,0,2-.897,2-2v-1.5c0-1.985-1.292-3.674-3.08-4.27Zm-5.213-5.731l3.835,5.502H11V3h1.836c1.144,0,2.217,.56,2.871,1.499Zm-10.979,.761c.512-1.352,1.827-2.259,3.272-2.259h2v7H3.5c-.201,0-.397,.017-.589,.05l1.816-4.79Zm2.272,13.741c0,1.103-.897,2-2,2s-2-.897-2-2v-1H7v1Zm14,0c0,1.103-.897,2-2,2s-2-.897-2-2v-1h4v1Zm2-3c0,.551-.448,1-1,1H2c-.552,0-1-.449-1-1v-2.5c0-1.378,1.121-2.5,2.5-2.5H19.5c1.93,0,3.5,1.57,3.5,3.5v1.5Z" />
                    </svg>
                    {true && <span style={{ textDecoration: 'line-through' }}>parking</span>}
                  </li>
                  <li className="flex flex-ai-c flex-jc-s g-12">
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
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>
                    <span>Pets allowed</span>
                  </li>
                  <li className="flex flex-ai-c flex-jc-s g-12">
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
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>

                    <span>Heating</span>
                  </li>
                  <li className="flex flex-ai-c flex-jc-s g-12">
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
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>

                    <span>Heater</span>
                  </li>
                  <li className="flex flex-ai-c flex-jc-s g-12">
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
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>

                    <span>Hot water</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="extra-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae ratione
                libero placeat, dignissimos at ducimus quod quidem nulla dolor! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Reprehenderit vitae ratione libero placeat,
                dignissimos at ducimus quod quidem nulla dolor!
              </p>
            </div>
          </div>
          <div className="booking">
            <div className="booking__card">
              <form>
                <div className="total-price">
                  <span>Price: $250 / per Night</span>
                </div>
                <div className="form-control">
                  <div className="select-date">
                    <div className=" flex flex-jc-sb" onClick={() => setOpenDate(!openDate)}>
                      <div style={{ padding: '6px 12px' }}>
                        <label htmlFor="">CHECK-IN</label>
                        <span>{`${format(date[0].startDate, 'dd/MM/yyyy')}`}</span>
                      </div>
                      <small></small>
                      <div style={{ padding: '6px 12px' }}>
                        <label htmlFor="">CHECK-OUT</label>
                        <span>{`${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
                      </div>
                    </div>
                    {openDate && (
                      <DateRange
                        className="date-picker"
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}
                        maxDate={
                          new Date(
                            format(new Date().setDate(date[0].startDate.getDate() + 3), 'MM/dd/yyy')
                          )
                        }
                      />
                    )}
                  </div>
                  <div className="guests">
                    <label htmlFor="guests">GUESTS</label>
                    <select name="" id="guests">
                      <option value="1">1 guest</option>
                      <option value="2">2 guest</option>
                      <option value="3">3 guest</option>
                      <option value="4">4 guest</option>
                      <option value="5">5 guest</option>
                    </select>
                  </div>
                </div>

                <div className="form-control">
                  <label htmlFor="">Full name</label>
                  <input type="text" placeholder="e.g John" />
                </div>
                <div className="form-control">
                  <label htmlFor="">Phone</label>
                  <input type="ph" />
                </div>
                <button className="booking-btn">Book This Place</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacePage;
