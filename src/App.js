import React,{ Component } from 'react';
import './App.css';
import Search from './Components/Search';
import Navbar from './Components/Navbar';
import Photos from './Components/Photos';
//import NotFound from './NotFound';
//import {BrowserRouter, Switch,Route,Redirect} from 'react-router-dom'
import axios from 'axios'
import apiKey from './Components/config';
import Header from './Components/Header';


export default class App extends Component {
  
  constructor(){
    super();

    this.state= {
      pics: [],
      butterflies:[],
      bobcats: [],
      badges:[],
      
    };
  }
  




componentDidMount(){
  this.performSearch();

}

performSearch=(query='butterflies')=>
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(res=>{
    this.setState({
      pics: res.data.photos.photo
    })
  })
  .catch(error =>{console.log('Error fetching and parsing data', error);
});
;


render()
{
  console.log(this.state.pics);
  return (
    <div>
      <div className = "main-header">
          <div className = "inner">
            <h1 className = "main-title">PicSearch</h1>
            <Header />
            <Search onSearch={this.performSearch} />

            <Navbar />
          </div>
      </div>
      <div className="main-content">
        {
          (this.state.loading)
          ? <p>Loading..</p>
          : <Photos pics={this.state.pics} />
        }
      
      </div>
  </div>
);}
  }

 

    
    

      
  

