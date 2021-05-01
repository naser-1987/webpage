import React from 'react';
import {AboutSection,AboutInfo,AboutInfoTitle,AboutInfoTitleSpan,AboutInfoDir,AboutInfoDesc} from "./style";
 const About =() => {
 
  return (
  <AboutSection>
    <div className="container">
        <AboutInfo>
          <AboutInfoTitle><AboutInfoTitleSpan>This is</AboutInfoTitleSpan> Me</AboutInfoTitle>
          <AboutInfoDir>Creative Director</AboutInfoDir>
          <AboutInfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <AboutInfoDesc href="#">explicabo</AboutInfoDesc> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </AboutInfoDesc>
          <AboutInfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </AboutInfoDesc>
        </AboutInfo>
    </div>
  </AboutSection>
  );
}

export default About;