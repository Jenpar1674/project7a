import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'; 

class Header extends Component {
    state = {  }
    render() { 
        return ( <div> 
         
                        <Jumbotron>
                
                    <h1>Jen's React Gallery App</h1>
                    <p>Browse through images courtesy of Flickr</p>
                
                
              
                        </Jumbotron>
       

        </div>
);
    }
}
 



export default Header;