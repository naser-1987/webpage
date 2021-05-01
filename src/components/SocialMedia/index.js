import axios from 'axios';
import React, { Component } from 'react';
import {SocialParagSpan2,SocialParagSpan,SocialParag,SocialIcon,SocialSetction,SocialSetctionSocial} from "./style";

class Social extends Component {
  state ={
    social :[]
  }
  componentDidMount(){
  axios.get("js/data.json").then(res => this.setState({social:res.data.social}));
  }  
  render(){
    const {social}=this.state;
    const socials= social.map(item =>{
                                  return(
                                  <SocialSetctionSocial item = {item.id} key = {item.id}>
                                    <SocialIcon  className={item.icon_name}></SocialIcon>
                                    <SocialParag>
                                      <SocialParagSpan>{item.title}</SocialParagSpan>
                                      <SocialParagSpan2>{item.body}</SocialParagSpan2>
                                    </SocialParag>
                                  </SocialSetctionSocial>)
                                }
                              )
    return (
      <SocialSetction > 
        {socials}
      </SocialSetction>
    );
  }
}
export default Social;