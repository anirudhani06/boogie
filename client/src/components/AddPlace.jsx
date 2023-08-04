import './AddPlace.scss';
import { React, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import PlaceImg from './PlaceImg';
import { places } from '../places.json';
const AddPlace = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  return (
    <form className="accomodation_form">
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input type="text" placeholder="e.g. My lovly apt" id="title" required />
      </div>
      <div className="form-control">
        <label htmlFor="address">Address</label>
        <input type="text" placeholder="e.g. kochi,kerala,india" id="address" />
      </div>
      <div className="form-control">
        <label htmlFor="title">Photos</label>
        <div className="all-images">
          <div className="acc-images">
            <PlaceImg url={`../../src/assets/places/${places[7].place[0].url}`} />
            <button className="delete" type="button">
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
          <div className="acc-images">
            <PlaceImg url={`../../src/assets/places/${places[4].place[0].url}`} />
            <button className="delete" type="button">
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
          <div className="acc-images">
            <PlaceImg url={`../../src/assets/places/${places[1].place[4].url}`} />
            <button className="delete" type="button">
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
          <div className="acc-images">
            <PlaceImg url={`../../src/assets/places/${places[7].place[2].url}`} />
            <button className="delete" type="button">
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
          <div className="acc-images">
            <PlaceImg url={`../../src/assets/places/${places[5].place[0].url}`} />
            <button className="delete" type="button">
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
          <div className="acc-images">
            <PlaceImg url={`../../src/assets/places/${places[1].place[0].url}`} />
            <button className="delete" type="button">
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>

          <button className="upload-img flex flex-ai-c flex-jc-c g-12" type="button">
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
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea
          name=""
          id="description"
          cols="30"
          rows="6"
          placeholder="Write here..."
        ></textarea>
      </div>
      <div className="form-control">
        <label>Perks</label>
        <div className="perks ">
          <div className="per flex flex-ai-c flex-jc-c g-8">
            <input type="checkbox" />
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

            <span>Wifi</span>
          </div>
          <div className="per flex flex-ai-c flex-jc-c g-8">
            <input type="checkbox" />
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

            <span>workspace</span>
          </div>
          <div className="per flex flex-ai-c flex-jc-c g-8">
            <input type="checkbox" />
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
                d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>

            <span>Tv</span>
          </div>
          <div className="per flex flex-ai-c flex-jc-c g-8">
            <input type="checkbox" />
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
          </div>
          <div className="per flex flex-ai-c flex-jc-c g-8">
            <input type="checkbox" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path d="m21.3,11.077l1.312-1.018c.263-.204.408-.526.385-.858s-.209-.632-.499-.798L8.797.51C7.857-.016,6.771-.142,5.734.158c-1.035.299-1.889.985-2.403,1.932l-.844,1.552c-1.034,1.9-.345,4.317,1.526,5.382l5.658,3.299-1.209,3.626c-.409,1.227-1.553,2.051-2.846,2.051h-3.617v-3c0-.552-.448-1-1-1s-1,.448-1,1v8c0,.552.448,1,1,1s1-.448,1-1v-3h3.617c2.155,0,4.062-1.374,4.743-3.418l1.077-3.229,2.878,1.678c.612.348,1.288.525,1.972.525.367,0,.737-.051,1.101-.154.357-.102.693-.249,1.001-.437l1.592.883c.591.328,1.336.111,1.66-.482l.844-1.547c.321-.588.107-1.324-.479-1.649l-1.137-.63c.118-.176.263-.33.431-.461Zm-4.46,2.4c-.521.148-1.066.082-1.527-.18L5.011,7.291c-.94-.535-1.284-1.744-.768-2.694l.844-1.552c.257-.474.684-.816,1.202-.966.186-.053.374-.08.561-.08.335,0,.665.084.959.25l12.4,7.143-.135.105c-.438.339-.794.758-1.06,1.245l-.966,1.77c-.259.475-.688.818-1.208.966Z" />
            </svg>

            <span>Securty camera</span>
          </div>
          <div className="per flex flex-ai-c flex-jc-c g-8">
            <input type="checkbox" />
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
          </div>
          <div className="per flex flex-ai-c flex-jc-c g-8">
            <input type="checkbox" />
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

            <span>Parking</span>
          </div>
          <div className="per flex flex-ai-c flex-jc-c g-8">
            <input type="checkbox" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <path d="M17,24c-1.844-.023-3.1-1.013-5-1-1.9-.013-3.157.977-5,1a3.675,3.675,0,0,1-4-4,9.356,9.356,0,0,1,9-9,9.356,9.356,0,0,1,9,9A3.675,3.675,0,0,1,17,24Zm-5-4a11.023,11.023,0,0,1,3.529.656c1.046.313,2.606.873,2.471-.656a6.407,6.407,0,0,0-6-6,6.407,6.407,0,0,0-6,6c-.138,1.53,1.428.968,2.471.656A11.023,11.023,0,0,1,12,20ZM21.844,5.014c-1.364-.163-2.6,1.128-2.814,3.46-.433,5.508,4.307,6.225,4.941.589C24.184,6.732,23.208,5.177,21.844,5.014ZM.029,9.063C.664,14.7,5.4,13.978,4.97,8.474c-.214-2.332-1.45-3.623-2.814-3.46S-.184,6.732.029,9.063Zm5.948-5c.635,5.639,5.374,4.915,4.94-.589C10.7,1.142,9.468-.149,8.1.014S5.763,1.732,5.977,4.063Zm9.9-4.049c-1.364-.163-2.6,1.128-2.813,3.46-.433,5.508,4.307,6.225,4.94.589C18.222,1.732,17.247.177,15.882.014Z" />
            </svg>

            <span>Pets Allowed</span>
          </div>
          <div className="per flex flex-ai-c flex-jc-c g-8">
            <input type="checkbox" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <path d="M8,14.169V4.875H6v9.294a3,3,0,1,0,2,0ZM7,17.985a1,1,0,1,1,1-1A1,1,0,0,1,7,17.985Zm5-13a5,5,0,0,0-10,0V12.1a7,7,0,1,0,10,0Zm-5,17a4.994,4.994,0,0,1-3.332-8.719l.332-.3V4.985a3,3,0,1,1,6,0v7.983l.332.3A4.994,4.994,0,0,1,7,21.985Z" />
              <path d="M22.293,5.293l1.414-1.414L20.414.586a2,2,0,0,0-2.828,0L14.293,3.879l1.414,1.414L18,3v9h2V3Z" />
            </svg>

            <span>Heating</span>
          </div>
          <div className="per flex flex-ai-c flex-jc-c g-8">
            <input type="checkbox" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 64 64"
              viewBox="0 0 64 64"
              id="washing-machine"
            >
              <path
                d="M55.74,60.95H8.26c-1.61,0-2.91-1.31-2.91-2.91V2.91C5.35,1.31,6.65,0,8.26,0h47.48c1.61,0,2.91,1.31,2.91,2.91v55.13
			C58.65,59.65,57.35,60.95,55.74,60.95z M8.26,1.94c-0.54,0-0.97,0.44-0.97,0.97v55.13c0,0.54,0.44,0.97,0.97,0.97h47.48
			c0.54,0,0.97-0.44,0.97-0.97V2.91c0-0.54-0.44-0.97-0.97-0.97H8.26z"
              ></path>
              <path
                d="M32,53.82c-9.29,0-16.85-7.56-16.85-16.85S22.71,20.13,32,20.13c9.29,0,16.85,7.56,16.85,16.85S41.29,53.82,32,53.82z
			 M32,22.07c-8.22,0-14.91,6.69-14.91,14.91S23.78,51.88,32,51.88c8.22,0,14.91-6.69,14.91-14.91S40.22,22.07,32,22.07z"
              ></path>
              <path d="M32 49.36c-6.83 0-12.38-5.56-12.38-12.38 0-6.83 5.56-12.38 12.38-12.38 6.83 0 12.38 5.56 12.38 12.38C44.38 43.8 38.83 49.36 32 49.36zM32 26.53c-5.76 0-10.44 4.69-10.44 10.44 0 5.76 4.69 10.44 10.44 10.44 5.76 0 10.44-4.69 10.44-10.44C42.44 31.21 37.76 26.53 32 26.53zM57.68 14.61H6.32c-.54 0-.97-.43-.97-.97 0-.54.43-.97.97-.97h51.36c.54 0 .97.43.97.97C58.65 14.18 58.22 14.61 57.68 14.61z"></path>
              <path d="M22.59 14.61c-.54 0-.97-.43-.97-.97V.97c0-.54.43-.97.97-.97s.97.43.97.97v12.67C23.56 14.18 23.12 14.61 22.59 14.61zM41.54 10.16H27.18c-.54 0-.97-.43-.97-.97V5.42c0-.54.43-.97.97-.97h14.36c.54 0 .97.43.97.97v3.76C42.51 9.72 42.08 10.16 41.54 10.16zM28.15 8.22h12.42V6.39H28.15V8.22zM47.63 6.39h-.99c-.54 0-.97-.43-.97-.97s.43-.97.97-.97h.99c.54 0 .97.43.97.97S48.16 6.39 47.63 6.39zM52.47 6.39h-.99c-.54 0-.97-.43-.97-.97s.43-.97.97-.97h.99c.54 0 .97.43.97.97S53.01 6.39 52.47 6.39zM47.63 10.16h-.99c-.54 0-.97-.43-.97-.97 0-.54.43-.97.97-.97h.99c.54 0 .97.43.97.97C48.6 9.72 48.16 10.16 47.63 10.16zM52.47 10.16h-.99c-.54 0-.97-.43-.97-.97 0-.54.43-.97.97-.97h.99c.54 0 .97.43.97.97C53.44 9.72 53.01 10.16 52.47 10.16zM14.76 11.19c-2.14 0-3.88-1.74-3.88-3.88s1.74-3.88 3.88-3.88 3.88 1.74 3.88 3.88S16.9 11.19 14.76 11.19zM14.76 5.36c-1.07 0-1.94.87-1.94 1.94 0 1.07.87 1.94 1.94 1.94 1.07 0 1.94-.87 1.94-1.94C16.7 6.23 15.83 5.36 14.76 5.36zM47.06 32.92c-.25 0-.5-.09-.68-.28-.38-.38-.38-.99 0-1.37l2.39-2.39c-1.85-3.59-4.77-6.5-8.68-8.65l-2.38 2.39c-.38.38-.99.38-1.37 0-.38-.38-.38-.99 0-1.37l2.89-2.9c.3-.3.76-.37 1.13-.18 4.83 2.5 8.35 6.03 10.46 10.49.18.37.1.81-.19 1.1l-2.88 2.89C47.56 32.83 47.31 32.92 47.06 32.92zM39.81 38.2c-2.98 0-5.6-.49-7.98-.93-4.07-.76-7.28-1.36-10.77.56-.47.26-1.06.09-1.32-.38-.26-.47-.09-1.06.38-1.32 4.1-2.25 7.97-1.53 12.06-.77 3.19.6 6.8 1.27 11.1.66.53-.08 1.02.29 1.1.82.08.53-.29 1.02-.82 1.1C42.24 38.12 40.99 38.2 39.81 38.2zM16.81 64h-6.22c-.54 0-.97-.43-.97-.97v-3.05c0-.54.43-.97.97-.97.54 0 .97.43.97.97v2.08h4.28v-2.08c0-.54.43-.97.97-.97.54 0 .97.43.97.97v3.05C17.78 63.57 17.35 64 16.81 64zM53.41 64h-6.22c-.54 0-.97-.43-.97-.97v-3.05c0-.54.43-.97.97-.97.54 0 .97.43.97.97v2.08h4.28v-2.08c0-.54.43-.97.97-.97.54 0 .97.43.97.97v3.05C54.38 63.57 53.95 64 53.41 64z"></path>
            </svg>
            <span>Washing machine</span>
          </div>
          <div className="per flex flex-ai-c flex-jc-c g-8">
            <input type="checkbox" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <path d="M20,23V2.5c0-1.378-1.121-2.5-2.5-2.5H6.5c-1.379,0-2.5,1.122-2.5,2.5V23H0v1H24v-1h-4ZM5,2.5c0-.827,.673-1.5,1.5-1.5h11c.827,0,1.5,.673,1.5,1.5V23H5V2.5Zm12,9.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z" />
            </svg>

            <span>Private entrence</span>
          </div>
          <div className="per flex flex-ai-c flex-jc-c g-8">
            <input type="checkbox" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <path d="M2,2A1,1,0,0,1,3,1H7.916a5,5,0,0,1,4.1,2.136l5.114,7.317A1,1,0,1,1,15.489,11.6L12.016,6.63,3.593,12.807a1,1,0,0,1-1.184-1.614l8.461-6.2-.495-.707A3,3,0,0,0,7.916,3H3A1,1,0,0,1,2,2ZM22.333,20.49A1.991,1.991,0,0,1,21,21a2.248,2.248,0,0,1-2.057-1.333,1,1,0,0,0-1.885,0,2.254,2.254,0,0,1-4.115,0,1,1,0,0,0-1.885,0,2.254,2.254,0,0,1-4.115,0,1,1,0,0,0-1.885,0A2.25,2.25,0,0,1,3,21a2,2,0,0,1-1.333-.511A1,1,0,0,0,.332,21.978,4,4,0,0,0,3,23a4.379,4.379,0,0,0,3-1.225,4.286,4.286,0,0,0,6,0,4.286,4.286,0,0,0,6,0A4.375,4.375,0,0,0,21,23a3.981,3.981,0,0,0,2.668-1.023,1,1,0,1,0-1.336-1.487ZM3,18a4.379,4.379,0,0,0,3-1.225,4.286,4.286,0,0,0,6,0,4.286,4.286,0,0,0,6,0A4.375,4.375,0,0,0,21,18a3.981,3.981,0,0,0,2.668-1.023,1,1,0,1,0-1.336-1.487A1.991,1.991,0,0,1,21,16a2.248,2.248,0,0,1-2.057-1.333,1,1,0,0,0-1.885,0,2.254,2.254,0,0,1-4.115,0,1,1,0,0,0-1.885,0,2.254,2.254,0,0,1-4.115,0,1,1,0,0,0-1.885,0A2.25,2.25,0,0,1,3,16a2,2,0,0,1-1.333-.511A1,1,0,0,0,.332,16.978,4,4,0,0,0,3,18ZM18.5,8A2.5,2.5,0,1,0,16,5.5,2.5,2.5,0,0,0,18.5,8Z" />
            </svg>

            <span>Pool</span>
          </div>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="">Extra info</label>
        <textarea name="" id="" cols="30" rows="3" placeholder="Extra information"></textarea>
      </div>
      <div className="form-control ">
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
        <label htmlFor="">Availability</label>
        <div className="flex flex-ai-c flex-jc-sb g-12">
          <div>
            <span>Opening Time</span>
            <span className="date" onClick={() => setOpenDate(!openDate)}>
              {`${format(date[0].startDate, 'dd/MM/yyy')}`}
            </span>
          </div>
          <div>
            <span>Closing Time</span>
            <span className="date" onClick={() => setOpenDate(!openDate)}>
              {`${format(date[0].endDate, 'dd/MM/yyy')}`}
            </span>
          </div>
          <div>
            <span>Max number of guests</span>
            <input type="number" min={1} defaultValue={1} />
          </div>
          <div>
            <span>Price per night</span>
            <input type="number" min={1} defaultValue={1} />
          </div>
        </div>
      </div>
      <div className="form-submit-btn">
        <button>Save</button>
      </div>
    </form>
  );
};

export default AddPlace;
