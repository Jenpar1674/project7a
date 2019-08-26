import React, { Component } from './node_modules/react';
import { Jumbotron } from './node_modules/react-bootstrap'; 




class Header extends Component {
    
    render() { 
        return ( <div className="text-center text-slanted text-capiltalized"> 
         
                        <Jumbotron>
            
                    <h1>Jen's React Gallery App</h1>
                    <h2>Browse through images courtesy of Flickr</h2>
                     
                   
                        </Jumbotron>
       

        </div>
);
    }
}
 



export default Header;