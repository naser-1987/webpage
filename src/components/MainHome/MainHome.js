import React from 'react';
import About from '../About/index';
import Home from '../Home/index';
import Work from '../Work/index';
import Portfolio from '../Portfolio/index';
import Profile from '../Profile/index';
import SocialMedia from '../SocialMedia/index';
import Footer from '../Footer/index';
const MainHome =() => {
 
  return (
    <div >
      <Home/>
      <Work/>
      <Portfolio/>
      <Profile/>
      <About/>
      <SocialMedia/>
      <Footer/>
    </div>
  );
}

export default MainHome;