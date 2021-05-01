import React,{useState, useEffect} from 'react';
import {ProtfolioTitleSpan,Protfolio,ProtfolioTitle,UlList,ListItem,ImageWrapper,Image,Overlay,OverlaySpan} from './style.js';
import axios from 'axios';
const Portfolio = () => {

const [Images, setImages]= useState({images:[]});
useEffect(()=>{axios.get("js/data.json").then((res)=>setImages({images :res.data.portfolio}))} , []);
const portimages = Images.images.map((image)=>{ 
                                          return(
                                                <ImageWrapper key={image.id} >
                                                  <Image src={image.image} alt="" />
                                                  <Overlay>
                                                    <OverlaySpan>
                                                      {image.show}
                                                    </OverlaySpan>
                                                  </Overlay>
                                                </ImageWrapper>
                                              );
                                          }
                                      );
  return (
    
    <Protfolio>
      <ProtfolioTitle><ProtfolioTitleSpan>My</ProtfolioTitleSpan> Portfolio</ProtfolioTitle>
      <UlList>
        <ListItem active>All</ListItem>
        <ListItem >HTML</ListItem>
        <ListItem >Photoshop</ListItem>
        <ListItem >Wordpress</ListItem>
        <ListItem >Mobile</ListItem>
      </UlList>

      <div className="box">
        {portimages}
      </div>
    </Protfolio>
  );
}

export default Portfolio;