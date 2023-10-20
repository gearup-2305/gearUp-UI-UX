import React from 'react';
import './HomePage.css';
import HomeHero from './HomeComponents/HomeHero';
import Testimony from './HomeComponents/Testimony';
import Preview from './HomeComponents/Preview';

const HomePage = ({loginAccess}) => {

  return (
  <>
    <HomeHero loginAccess={loginAccess}/>
    <Testimony/>
    <Preview/>
  </>
  )
}

export default HomePage;
