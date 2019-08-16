import React,{ Component } from 'react';
import './App.css';
import Search from './Components/Search';
import Navbar from './Components/Navbar';
import Photos from './Components/Photos';
//import { Grid ,Jumbotron } from 'react-bootstrap';
import {Route} from 'react-router-dom'
import axios from 'axios'
import apiKey from './Components/config';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import { BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min';

export default class App extends Component {
  
  constructor(){
    super();

    this.state= {
      pics: [], //picture array for general search
      butterflies:[], //array for specified categories
      bobcats: [],
      badges:[],
      loading:true
      
    };
  }
  




componentDidMount(){
  this.performSearch();
  this.searchButterflies();
  this.searchBobcats();
  this.searchBadges();

}
//API fetching using axios
performSearch=(query='rainbows')=>//image array and index pages - default query so it starts with something
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(res=>{
    this.setState({
      pics: res.data.photos.photo,
      loading:false
    })
  })
  .catch(error =>{console.log('Error fetching and parsing data', error);
});
;
searchButterflies=(query='butterflies')=>//image array for butterflies
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(res=>{
    this.setState({
      butterflies: res.data.photos.photo,
      loading:false
    })
  })
  .catch(error =>{console.log('Error fetching and parsing data', error);
});
;
searchBobcats=(query='bobcats')=>//image array for 
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(res=>{
    this.setState({
      bobcats: res.data.photos.photo,
      loading:false
    })
  })
  .catch(error =>{console.log('Error fetching and parsing data', error);
});
;
searchBadges=(query='badges')=>//image array for badges
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(res=>{
    this.setState({
      badges: res.data.photos.photo,
      loading:false
    })
  })
  .catch(error =>{console.log('Error fetching and parsing data', error);
});
;

render()
{
  console.log(this.state.pics);
  return (

    <BrowserRouter>
    <div>
      <div className = "main-header">
          <div className = "inner">
            
            <Header />


              {/* Search form rendered to index and search pages  */}
               
              <Route path="/search" component={() => <Search onSearch={this.performSearch} />} />
              <Search onSearch={this.performSearch} />

            <Navbar data= {this.performSearch} />
            
            <Switch>
              {/* renders data to the proper url pages showing each unique image array   */}
                <Route exact path="/search" component={() => <Photos pics={this.state.pics} />} />
                <Route exact path="/butterflies" component={() => <Photos pics={this.state.butterflies} />} />
                <Route exact path="/bobcats" component={() => <Photos pics={this.state.bobcats} />} />
                <Route exact path="/badges" component={() => <Photos pics={this.state.badges} />} />
                <Route exact path='/' component={() => <Photos pics={this.state.pics} />} />
                <Route component={() => <NotFound />} />
              </Switch>

          </div>
          {/* <NotFound /> */}
      </div>
      <div className="main-content">
        {
          (this.state.loading)
          ? <p>Loading..</p>
          : <Photos pics={this.state.pics} />
        }
      
      </div>
  </div>

  </BrowserRouter>
);}
  }

 

    
    

      
  

