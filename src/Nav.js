import React from 'react';
//import{ Navlink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
//class Nav extends Component {
    
    //render() { 
        const Nav = (props)=> {
        return ( 
        
            
            <nav className="main-nav">
            <ul id = "nav">
            {/* <li><Navlink to ='/guns'>Guns</Navlink></li>
            <li><Navlink>='https://google.com'>Butterflies</Navlink></li>
            <li><Navlink>='https://google.com'>Bobcats</Navlink></li>
            <li><Navlink>='https://google.com'>Badges</Navlink></li> */}
          </ul>
         
        </nav>

            )
         
    
}
 
export default withRouter(Nav);