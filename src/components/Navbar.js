import React,{Component} from 'react';
// import{ NavLink } from 'react-router-dom';
import { withRouter, NavLink} from 'react-router-dom';
//import { Link } from "react-router-dom.js";
 //import Search from './Search';


 

class Navbar extends Component {

  handleRoute = text => {
    this.props.history.push(`/search/${text}`);
  }

  render() {
    // Builds top navigation with NavLink
    return (
      <header>
        <nav className="main-nav nav-pill">
          <ul>
          
          <li><NavLink to='/search'>Search</NavLink></li>
            <li><NavLink to="/tags/butterflies">Butterflies</NavLink></li>
            <li><NavLink to="/tags/bobcats">Bobcats</NavLink></li>
            <li><NavLink to="/tags/badges">Badges</NavLink></li>

          </ul>
          </nav>
      </header>
    );
  }

}

export default withRouter(Navbar);

