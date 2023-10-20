import React from 'react';
import './HomePage.css';
import HomeHero from './HomeComponents/HomeHero';
import Testimony from './HomeComponents/Testimony';

const HomePage = ({loginAccess}) => {

  return (
  <>
    <HomeHero loginAccess={loginAccess}/>
    <Testimony/>
  </>
  )
}

export default HomePage;
