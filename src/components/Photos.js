import React from 'react';
import NotFound from './NotFound';
import ImageItem from './ImageItem';

const Photos = (props) => {
  
  const results = props.pics;
  
  
  let pics;
  
 
  if (results.length > 0){
  pics = results.map(pic => <ImageItem url = {`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}key={pic.id}/>);
 
  } else {
    pics=(<NotFound />)
  }

  
return(
    <div className="photo-container">
          <ul>
          {pics}
          </ul>
    </div>);
 
// else {
     
//return( <NotFound />)
//   }
 }
    

 
export default Photos;