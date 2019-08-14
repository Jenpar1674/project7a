import React,{ Component } from 'react';
import './App.css';
import Search from './Components/Search';
//import Navbar from './Components/Navbar';
// import Photos from './Components/Photos';
//import Notfound from './Components/Notfound';
// import {BrowserRouter, Switch, } from 'react-router-dom'
import axios from 'axios'
import apiKey from './Components/config';



export default class App extends Component {
  
  state= {
    pics: [ ],
    butterflies:[],
    bobcats: [],
    badges:[],
    

}
  componentDidMount=(query='butterflies')=> {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res=>{
      console.log(res)
      this.setState({
        butterflies: res.data.photos.photo,

      })
    })
  }
  
 render(){
    // const {pics} = this.state;
    // const postlist =pics.length ? (
    //   pics.map(pics=>{
    //     return(
    //       <div className ="pics card" key={pics.id}>
    //         <div className="card-content">
    //         <span className = "card-title">{pics.title}</span>
    //         <p>{pics.body}</p>
    //       </div>
    //       </div>

    //     )
    //   })
    // ):(
    //   <div className="center">no pics yet</div>
    // )
  return (
    <div>
      <Search />
      
      
    </div>)

      // <BrowserRouter>
      /* <div className="container"> */

       /* <Switch >
             <Route exact path="/"  />
               <Route path="/butterflies" />
              <Route path="/bobcats"  />
              <Route path="/badges" />
     <Switch />
    <Search />
       */
        /* <form className="search-form">
          <input type="search" name="search" placeholder="Search" required/>
          <button type="submit" className="search-button">
            <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
        </form> */
        /* <Navbar /> */
        
          
        
        // <Photos />
        /* <div className="photo-container">
          <h2>Results</h2>
          <ul>
            <li>
              <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
            </li> */
            
            // <Notfound />
            /* <li className="not-found">
              <h3>No Results Found</h3>
              <p>You search did not return any results. Please try again.</p>
            </li>
          */
     
      // </div>
      //</BrowserRouter>
    // );
  } 
}


