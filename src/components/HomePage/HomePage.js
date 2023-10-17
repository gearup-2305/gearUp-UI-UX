import React from 'react';
import './HomePage.css';
import Together from '../../assets/together.png';
import { Link } from 'react-router-dom';

const HomePage = ({loginAccess}) => {

  return (
    <div className='home-container'>
      <div className='image-container'>
        <img className='together-img' src={Together} alt=''/>
      </div>
      <div className='description-container'>
        <h2 className='description-heading'>Help Artists Create Art</h2>
        <p className='description'>GearUp connects a widespread community of donors with thriving artists who are eager to bring their artistic vision to life.</p>
        {!loginAccess &&  
        <div className='login-container'>
          <h2 className='login-home-heading'>Are you an artist?</h2>
            <Link className='login-link' to={`/login-form`} >Login</Link>
        </div>}
        {loginAccess &&  
        <div className='login-container'>
            <Link className='gear-up-link' to={`/donation-request`}>Start Gearing Up</Link>
        </div>}
      </div>
    </div>
  )
}

export default HomePage;
