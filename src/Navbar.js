import React from 'react';
import{ Navlink } from 'react-router-dom.js';
import { withRouter } from 'react-router-dom.js';
//import { Link } from "react-router-dom.js";

//class Navbar extends Component {
    
    //render() { 
        const Navbar = ()=> {
        return ( 
            
          
            
            <nav className="main-nav">
            <ul id = "nav">
            <li><Navlink to='/butterflies'>Butterflies</Navlink></li>
            <li><Navlink to='/bobcats'>Bobcats</Navlink></li>
            <li><Navlink to='/badges'>Badges</Navlink></li>
          </ul>
         
        </nav>
       
            )
         
    
}
 
export default withRouter(Navbar);