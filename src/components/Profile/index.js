import React , { Component }from 'react';
import {ProfileSkill,ProfileSection,ProfileTitleSpan,ProfileSkillSpan,ProfileList,ProfileListItem,ProfileItemSpan,ProfileItemWebSpan,Skills,SkillsDesc,SkillsBar,SkillsBarTitle,SkillsBarPrec,SkillsBarParent,SkillsBarParentSpan,ProfileTitle,SkillsTitle} from "./style.js";
import axios from 'axios';
class  Profile extends Component {
state ={ skills:[],details:{}}
componentDidMount(){
  axios.get('js/data.json').then((res)=>{this.setState({skills:res.data.skills,details:res.data.user})});
}
render(){
  const skills = this.state.skills.map((skill)=>{ return(
    <SkillsBar key={skill.id}>
      <SkillsBarTitle>{skill.name}</SkillsBarTitle>
      <SkillsBarPrec>{skill.progress}%</SkillsBarPrec>
      <SkillsBarParent>
        <SkillsBarParentSpan id ={skill.progress}></SkillsBarParentSpan>
      </SkillsBarParent>
    </SkillsBar>
  );});
  return (
  
    <ProfileSkill>
      <div className="container">
        <ProfileSection>
          <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
          <ProfileList>
            <ProfileListItem>
              <ProfileItemSpan>Name</ProfileItemSpan>
               {this.state.details.Username}
            </ProfileListItem>
            <ProfileListItem>
              <ProfileItemSpan>Birthday</ProfileItemSpan>
              {this.state.details.Birthday}
            </ProfileListItem>
            <ProfileListItem>
              <ProfileItemSpan>Address</ProfileItemSpan>
              {this.state.details.Address}
            </ProfileListItem>
            <ProfileListItem>
              <ProfileItemSpan>Phone</ProfileItemSpan>
              {this.state.details.Phone}
            </ProfileListItem>
            <ProfileListItem>
              <ProfileItemSpan>Email</ProfileItemSpan>
              {this.state.details.Email}
            </ProfileListItem>
            <ProfileListItem>
              <ProfileItemSpan>Website</ProfileItemSpan>
              <ProfileItemWebSpan>{this.state.details.Website}</ProfileItemWebSpan>
            </ProfileListItem>
          </ProfileList>
        </ProfileSection>
        
        <Skills>
          <SkillsTitle>Some <ProfileSkillSpan>skills</ProfileSkillSpan></SkillsTitle>
          <SkillsDesc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          {skills}
        </Skills>
      </div>
    </ProfileSkill>
  );
  }
}

export default Profile;