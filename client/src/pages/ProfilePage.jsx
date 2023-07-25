import './ProfilePage.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import ProfileForm from '../components/ProfileForm';

const ProfilePage = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState(false);
  const [username, setUsername] = useState(false);
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);
  const [about, setAbout] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [editAccount, setEditAccount] = useState(false);

  return (
    <div className="ProfilePage py-16">
      <div className="profile-section">
        <ProfileCard />
      </div>
      <div className="profile-details">
        <h3>Profile info</h3>
        <ProfileForm />
        <div className="flex flex-ai-c flex-jc-sb">
          <h3>Account</h3>
          <button
            className="edit flex flex-ai-c flex-jc-c"
            style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
            onClick={() => setEditAccount(!editAccount)}
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
        <div className="form-control">
          <div className="flex flex-ai-c flex-jc-sb">
            <label htmlFor="">Account no</label>
          </div>
          <input
            type="text"
            placeholder="xxxx xxxx xxxx"
            style={
              editAccount
                ? { pointerEvents: 'initial', outline: '1px solid #0aab78' }
                : { pointerEvents: 'none' }
            }
          />
          <button className="save" style={name ? { display: 'block' } : { display: 'none' }}>
            save
          </button>
        </div>
        <div className="form-control">
          <div className="flex flex-ai-c flex-jc-sb">
            <label htmlFor="">First Name</label>
          </div>
          <input
            type="text"
            placeholder="First Name"
            style={
              editAccount
                ? { pointerEvents: 'initial', outline: '1px solid #0aab78' }
                : { pointerEvents: 'none' }
            }
          />
          <button className="save" style={name ? { display: 'block' } : { display: 'none' }}>
            save
          </button>
        </div>
        <div className="form-control">
          <div className="flex flex-ai-c flex-jc-sb">
            <label htmlFor="">Last Name</label>
          </div>
          <input
            type="text"
            placeholder="Full name"
            style={
              editAccount
                ? { pointerEvents: 'initial', outline: '1px solid #0aab78' }
                : { pointerEvents: 'none' }
            }
          />
          <button className="save" style={name ? { display: 'block' } : { display: 'none' }}>
            save
          </button>
        </div>
        <div className="form-control">
          <div className="flex flex-ai-c flex-jc-sb">
            <label htmlFor="">CCV No</label>
          </div>
          <input
            type="text"
            placeholder="xxxx"
            style={
              editAccount
                ? { pointerEvents: 'initial', outline: '1px solid #0aab78' }
                : { pointerEvents: 'none' }
            }
          />
          <button className="save" style={editAccount ? { display: 'block' } : { display: 'none' }}>
            save
          </button>
        </div>
        <h3>Others</h3>
        <div className="change-pwd">
          <h3 onClick={() => setChangePassword(!changePassword)}>Change Password</h3>

          {changePassword && (
            <>
              <form>
                <input type="text" placeholder="Old Password" />
                <input type="text" placeholder="New Password" />
                <input type="text" placeholder="Confirm Password" />
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
        <div className="delete-acc">
          <h3 onClick={() => alert('Do you want to delete this account?')}>Delete Account</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
