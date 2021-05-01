import React from 'react';
import {HomeSection ,HomeInformation,HomeTitle, HomeInfo,HomeBtn,HomeDesc,HomeDescSpan} from'./style.js';
 const Home =() => {
 
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle >Naser Alsaleh</HomeTitle>
          <HomeInfo >Creative Director</HomeInfo>
          <HomeDesc>
            Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
          </HomeDesc>
          <HomeBtn >Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
}

export default Home;