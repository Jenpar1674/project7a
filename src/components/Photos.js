import React from 'react';

const Photos = ({pics}) => (
   <div className= "container">
    <ul>
          {pics.map(pic => 
            <li>
              <img src = {"https://farm" + pic.farm + ".staticflickr.com/" + pic.server + "/" + pic.id + "_" + pic.secret + ".jpg" } alt=""/>)}
            </li>
          )}
    </ul>
    </div>
);
    

 
export default Photos;