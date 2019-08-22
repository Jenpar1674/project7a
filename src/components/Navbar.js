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

//         const Navbar = ()=> {
//         return ( 
            
//           <Router>
//             <nav className="main-nav">
//               <ul id = "nav">
//                 <span><li><NavLink to='/butterflies'>Butterflies</NavLink></li></span>
//                 <span><li><NavLink to='/bobcats'>Bobcats</NavLink></li></span>
//                 <span> <li><NavLink to='/badges'>Badges</NavLink></li></span>
//               </ul>
//             </nav>
//           </Router>
//         )
// }
 
// export default Navbar;