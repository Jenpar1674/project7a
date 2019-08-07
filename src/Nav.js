import React, { Component } from 'react';

class Nav extends Component {
    
    render() { 
        
        return ( 

            <nav className="main-nav">
          <ul>
            <li><a href='https://google.com'>Cats</a></li>
            <li><a href='https://google.com'>Dogs</a></li>
            <li><a href='https://google.com'>Computers</a></li>
          </ul>
        </nav>

            )
         
    }
}
 
export default Nav;