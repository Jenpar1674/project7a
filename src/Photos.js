import React, { Component } from 'react';

const Photos = (props)=>{
    
     return ( 
<div className="photo-container" >
          <h2 style = {{color: "royalblue", backgroundColor: "purple" }}>Results</h2>
          <ul>
            <li>
            <img src={`https://farm${props.farmId}.staticflickr.com/${props.serverId}/${props.id}_${props.secret}.jpg`} alt={props.alt} />
            </li>
          
            </ul>
          </div>
    

         );
    }

 
export default Photos;