import './ProfileForm.scss';
import React, { useState } from 'react';

const ProfileForm = () => {
  const [image, setImage] = useState('');
  const [showInp, setShowInp] = useState({
    image: false,
    name: false,
    username: false,
    email: false,
    phone: false,
    about: false,
  });
  return (
    <>
      <div className="form-control">
        <div className="flex flex-ai-c flex-jc-sb">
          <label htmlFor="">Change profile picture</label>
        </div>
        <input type="file" onChange={(e) => setImage(e)} />
        <button className="save" style={image ? { display: 'block' } : { display: 'none' }}>
          Upload
        </button>
      </div>
      <div className="form-control">
        <div className="flex flex-ai-c flex-jc-sb">
          <label htmlFor="">Name</label>
          <button
            type="button"
            className="edit"
            onClick={(event) => {
              setShowInp({
                ...showInp,
                name: !showInp.name,
                username: false,
                email: false,
                phone: false,
                about: false,
              });
              event.target.parentElement.parentElement.parentElement.querySelector('input').focus();
            }}
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
        <input
          type="text"
          placeholder="Name"
          style={
            showInp.name
              ? { pointerEvents: 'initial', outline: '1px solid #0aab78' }
              : { pointerEvents: 'none' }
          }
        />
        <button
          className="save"
          type="button"
          style={showInp.name ? { display: 'block' } : { display: 'none' }}
        >
          save
        </button>
      </div>
      <div className="form-control">
        <div className="flex flex-ai-c flex-jc-sb">
          <label htmlFor="">Username</label>
          <button
            className="edit"
            onClick={(event) => {
              setShowInp({
                ...showInp,
                username: !showInp.username,
                name: false,
                email: false,
                phone: false,
                about: false,
              });
              event.target.parentElement.parentElement.parentElement.querySelector('input').focus();
            }}
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
        <input
          type="text"
          placeholder="Username"
          style={
            showInp.username
              ? { pointerEvents: 'initial', outline: '1px solid #0aab78' }
              : { pointerEvents: 'none' }
          }
        />
        <button
          className="save"
          style={showInp.username ? { display: 'block' } : { display: 'none' }}
        >
          save
        </button>
      </div>
      <div className="form-control">
        <div className="flex flex-ai-c flex-jc-sb">
          <label htmlFor="">Email</label>
          <button
            className="edit"
            onClick={(event) => {
              setShowInp({
                ...showInp,
                email: !showInp.email,
                name: false,
                username: false,
                phone: false,
                about: false,
              });
              event.target.parentElement.parentElement.parentElement.querySelector('input').focus();
            }}
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
        <input
          type="email"
          placeholder="Email"
          style={
            showInp.email
              ? { pointerEvents: 'initial', outline: '1px solid #0aab78' }
              : { pointerEvents: 'none' }
          }
        />
        <button className="save" style={showInp.email ? { display: 'block' } : { display: 'none' }}>
          save
        </button>
      </div>
      <div className="form-control">
        <div className="flex flex-ai-c flex-jc-sb">
          <label htmlFor="">Phone</label>
          <button
            className="edit"
            onClick={(event) => {
              setShowInp({
                ...showInp,
                phone: !showInp.phone,
                name: false,
                username: false,
                email: false,
                about: false,
              });
              event.target.parentElement.parentElement.parentElement.querySelector('input').focus();
            }}
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
        <input
          type="text"
          placeholder="Phone"
          style={
            showInp.phone
              ? { pointerEvents: 'initial', outline: '1px solid #0aab78' }
              : { pointerEvents: 'none' }
          }
        />
        <button className="save" style={showInp.phone ? { display: 'block' } : { display: 'none' }}>
          save
        </button>
      </div>
      <div className="form-control">
        <div className="flex flex-ai-c flex-jc-sb">
          <label htmlFor="">About</label>
          <button
            className="edit"
            onClick={(event) => {
              setShowInp({
                ...showInp,
                about: !showInp.about,
                name: false,
                username: false,
                email: false,
                phone: false,
              });
              event.target.parentElement.parentElement.parentElement
                .querySelector('textarea')
                .focus();
            }}
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="6"
          placeholder="About"
          style={
            showInp.about
              ? { pointerEvents: 'initial', outline: '1px solid #0aab78' }
              : { pointerEvents: 'none' }
          }
        ></textarea>
        <button className="save" style={showInp.about ? { display: 'block' } : { display: 'none' }}>
          save
        </button>
      </div>
    </>
  );
};

export default ProfileForm;
