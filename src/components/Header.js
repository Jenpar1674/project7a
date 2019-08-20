import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'; 

class Header extends Component {
    state = {}
    render() { 
        return ( <div className="text-center"> 
         
                        <Jumbotron>
            
                    <h1>Jen's React Gallery App</h1>
                    <h2>Browse through images courtesy of Flickr</h2>
                
                
                   
                        </Jumbotron>
       

        </div>
);
    }
}
 



export default Header;