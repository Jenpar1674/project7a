import React from 'react';
import NotFound from './NotFound';
import ImageItem from './ImageItem';
import Results from './Results';
const Photos = (props) => {
  
  const results = props.pics;
  
  
  let pics;
  
 
  if (results.length > 0){
  pics = results.map(pic => <ImageItem url = {`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}key={pic.id}/>);
 
  } else {
    pics=(<NotFound />)
  }

  
  return(
      <div className="photo-container li:hover img ">
       
            <ul>
            {pics}
            </ul>
      </div>
      
  )
 

 }
    

 
export default Photos;