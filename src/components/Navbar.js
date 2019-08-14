import React from 'react';
//import{ Navlink } from 'react-router-dom';
import { withRouter } from 'react-router-dom.js';
import { Link } from "react-router-dom.js";

//class Navbar extends Component {
    
    //render() { 
        const Navbar = ()=> {
        return ( 
            
          
            
            <nav className="main-nav">
            <ul id = "nav">
            <li><Link to='/butterflies'>Butterflies</Link></li>
            <li><Link to='/bobcats'>Bobcats</Link></li>
            <li><Link to='/badges'>Badges</Link></li>
          </ul>
         
        </nav>
       
            )
         
    
}
 
export default withRouter(Navbar);