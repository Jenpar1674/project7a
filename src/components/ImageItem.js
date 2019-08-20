import React from 'react';
//function for showing each image
const ImageItem = props =>(
  <li>
    <img src={props.url} className="rounded" alt={props.title}/>
  </li>
);

export default ImageItem;