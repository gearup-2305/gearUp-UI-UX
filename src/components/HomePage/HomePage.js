import React, { useState } from 'react';
import './HomePage.css';
import Together from '../../assets/together.png';
import { Link } from 'react-router-dom';

const HomePage = ({ setLoginAccess, logOutAccess, setLogOutAccess }) => {
  const [buttonText, setButtonText] = useState(logOutAccess ? 'Log Out' : 'Login to get support.');

  const handleButtonClick = () => {
    if (buttonText === 'Log Out') {
      setLoginAccess(false);
      console.log(logOutAccess)
    } else {
      setButtonText('Log Out');
      setLoginAccess(true);
      console.log(logOutAccess)

    }
  }

  return (
    <div className='home-container'>
      <div className='image-container'>
        <img className='together-img' src={Together} alt=''/>
      </div>
      <div className='description-container'>
        <h2 className='description-heading'>Help Artists Create Art</h2>
        <p className='description'>GearUp connects a widespread community of donors with thriving artists who are eager to bring their artistic vision to life.</p>
        <div className='login-container'>
          <h2 className='login-home-heading'>Are you an artist?</h2>
          {buttonText === 'Log Out' ? (
            <Link className='login-link' to={`/`} onClick={setLogOutAccess(false)}>{buttonText}</Link>
          ) : (
            <Link className='login-link' to={`/login-form`} onClick={handleButtonClick}>{buttonText}</Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage;
