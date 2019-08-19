import React,{ Component } from 'react';
import './App.css';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Photos from './components/Photos';
//import { Grid ,Jumbotron } from 'react-bootstrap';
import {Route} from 'react-router-dom'
import axios from 'axios'
import apiKey from './components/config';
import Header from './components/Header';
import NotFound from './components/NotFound';
import { BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Results from './components/Results';

export default class App extends Component {
  
  constructor(){
    super();

    this.state= {
      pics:[], //picture array for general search
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
performSearch=(query='cats')=>//image array and index pages - default query so it starts with something
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
render(){
  console.log(this.state.pics);
  return (
  <BrowserRouter>
    <div>
    
  <Header />
           

      {/* Search form rendered to index and search pages  */}
      <Route exact path="/" component={() => <Search onSearch={this.performSearch} />} />
      <Route path="/search" component={() => <Search onSearch={this.performSearch} />} />
              
      <div className="performSearch">
      
        <Navbar onClick= {this.performSearch} />
        
          
            
      <Results/>  
          <Route exact path= "/butterflies" render ={ () => <Results title = "Butterflies" />} />
          <Route exact path= "/bobcats" render ={ () => <Results title = "Bobcats" />} />
          <Route exact path= "/badges" render ={ () => <Results title = "Badges" />} />
          <Route exact path= "/" render ={ () => <Results title = "Cool Pics Below" />} />
          <Route exact path="/search" render={ () => <Results title = "Cool Pics Below"/>} />
        
      <div className="main-content">
      {
        (this.state.loading)
            ? <h3>Loading...</h3>
            :
              <Switch>
              /* renders data to the proper url pages showing each unique image array   */
                <Route exact path="/search" component={() => <Photos pics={this.state.pics} />} />
                <Route exact path="/butterflies" component={() => <Photos pics={this.state.butterflies} />} />
                <Route exact path="/bobcats" component={() => <Photos pics={this.state.bobcats} />} />
                <Route exact path="/badges" component={() => <Photos pics={this.state.badges} />} />
                <Route exact path='/' component={() => <Photos pics={this.state.pics} />} />
                <Route component={() => <NotFound />} />
              </Switch>
        }

          </div>
          
      </div>
      
        
      </div>
  

  </BrowserRouter>
);}
  }

 

    
    

      
  

