import React from 'react';
// import{ NavLink } from 'react-router-dom';
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
//import { Link } from "react-router-dom.js";

        const Navbar = ()=> {
        return ( 
            
          <Router>
            <nav className="main-nav">
              <ul id = "nav">
                <li><NavLink to='/butterflies'>Butterflies</NavLink></li>
                <li><NavLink to='/bobcats'>Bobcats</NavLink></li>
                <li><NavLink to='/badges'>Badges</NavLink></li>
              </ul>
            </nav>
          </Router>
        )
}
 
export default Navbar;