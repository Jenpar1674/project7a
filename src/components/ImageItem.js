import React from './node_modules/react';
//function for showing each image
const ImageItem = props =>(
  <li>
    <img src={props.url} className="rounded" alt='flickr img not found'/>
  </li>
);

export default ImageItem;