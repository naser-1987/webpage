import React, { Component } from 'react';
import {WorkSection,Workfirst,Icon,PartTitle,PartLine,PartDesc} from "./style"
import  axios from 'axios';
class Work extends Component {
  state ={
    works:[]
  }
  componentDidMount(){
    axios.get('js/data.json').then(res =>{this.setState({works : res.data.works})});
  }
  render(){
    const works = this.state.works;
    const workItem = works.map(work=>{
      return(
        <Workfirst first={work.id} key ={work.id}>
          <Icon className={work.icon_name}></Icon>
          <PartTitle>{work.title}</PartTitle>
          <PartLine />
          <PartDesc>
          {work.body}
          </PartDesc>
        </Workfirst>
      );
    });
    return (
      <WorkSection>
        <div className="container">
          {workItem}
        </div>
      </WorkSection>
    );
  }
}

export default Work;