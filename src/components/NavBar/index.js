import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarS , Logo , LogoText , UlList , ListItem , Anchor  } from "./style.js";
const styleLink={
    display: 'block',
    color:'#222' ,
    textDecoration: 'none',
    padding: '10px 15px',
    fontWeight: 'bold', 
    
}
const NavBar = () => {
 
    return (
        <NavBarS>
                
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem><Link to="/" style={styleLink}>Home</Link></ListItem>
                    <ListItem><Anchor >Work</Anchor></ListItem>
                    <ListItem><Anchor>Portfolio</Anchor></ListItem>
                    <ListItem><Anchor>Resume</Anchor></ListItem>
                    <ListItem><Anchor>About</Anchor></ListItem>
                    <ListItem><Link to="/Contact" style={styleLink}>Contact</Link></ListItem>
                </UlList>
                
            </div>
        
        </NavBarS>
    );
}
export default NavBar;
