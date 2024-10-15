import React from 'react';
import Email from '../images/email-icon.svg';
import Icon from '../images/linkedin-icon.svg';

function Info() {
  const ProfilePic =
    'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F979caa12-ae8a-40ae-9773-7fdd705e98fa_3750x3750.jpeg';
  return (
    <>
      <div className="info--container">
        <img src={ProfilePic} className="profile-pic" />
        <h2 className="name">Noah Kiser</h2>
        <h3 className="job-title">Frontend Developer</h3>
        <a a href="https://www.partnerwith.net" target="_blank">
          <p className="website">PARTNERwith.net</p>
        </a>
        <div className="info--buttons">
          <a href="mailto:noah.kiser@gmail.com" target="_blank">
            {' '}
            <button className="info--email">
              <img src={Email} alt="email icon" />
              <p>Email</p>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/noah-kiser-profile/"
            target="_blank"
          >
            <button className="info--linkedin">
              <img src={Icon} alt="linkedin-icon" />
              <p>LinkedIn</p>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Info;
