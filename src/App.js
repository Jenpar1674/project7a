import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import apiKey from './Components/config';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import Photos from './Components/Photos';
import Results from './Components/Results';
import Search from './Components/Search';

//imported components

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
  
  this.performSearch('butterflies');
  this.performSearch('bobcats');
  this.performSearch('badges');
  this.performSearch('sunsets'); 
}
componentWillUnmount() {
  clearInterval(this.state.butterflies);
  clearInterval(this.state.bobcats);
  clearInterval(this.state.badges);
  clearInterval();
}
 
//API fetching using axios
performSearch=(query)=>{//image array and index pages - default query so it starts with something
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(response=>{
    if (query === 'butterflies'){
    this.setState({
      butterflies: response.data.photos.photo,
      loading:false
    });
    console.log(this.state.butterflies);

    } else if (query === 'bobcats'){
    this.setState({
      bobcats: response.data.photos.photo,
      loading:false
    });
    console.log(this.state.bobcats);

  } else if (query === 'badges'){
    this.setState({
      badges: response.data.photos.photo,
      loading:false
    });
    console.log(this.state.badges);

  }else {
    this.setState({
      pics: response.data.photos.photo,
      loading: false
    });
    console.log(this.state.pics);

  }
})
.catch((error) => {
  console.log('Error fetching and parsing data', error);
});
}

render(){  /**render the route with components
  */
  // console.log(this.state.pics);
  return (
   
  <BrowserRouter>
    
    <div className="container">
    <Header/ >
    
             
    <Route exact path="/" component={() => <Search onSearch={this.performSearch} />} />
    <Route path="/search" component={() => <Search onSearch={this.performSearch} />} />

    <div className='performSearch'>
      <Navbar onClick={this.performSearch}/>
    <Results />
          {/* prints custom titles to each page from Results component */}
              <Route exact path= "/tags/butterflies" render ={ () => <Results title = "Butterflies" />} />
              <Route exact path= "/tags/bobcats" render ={ () => <Results title = "Bobcats" />} />
              <Route exact path= "/tags/badges" render ={ () => <Results title = "Badges" />} />
               <Route exact path= "/" render ={ () => <Results title = "Cool Pics Below" />} />
              <Route exact path="/search/" render={ () => <Results title = "Cool Pics Below"/>} />
    
        <Switch>


        <Route exact path='/' render={ () => ( 
                  <div className="main-content">
                    {
                      this.state.loading ? <h3> Loading ...</h3> : this.state.pics ? <Photos pics={ this.state.pics } /> : <NotFound /> 
                    }
                  </div>
                  )} 
                />
                <Route path='/search/' render={ () => ( 
                  <div className="main-content">
                    {
                      this.state.loading ? <p> Loading ...</p> : this.state.pics ? <Photos pics={ this.state.pics } /> : <NotFound /> 
                    }
                  </div>
                  )} 
                />


                <Route path='/tags/butterflies' render={() => <Photos pics={ this.state.butterflies } />} />
                <Route path='/tags/bobcats' render={() => <Photos pics={ this.state.bobcats } />} />
                <Route path='/tags/badges' render={() => <Photos pics={ this.state.badges } />} />
                <Route component={NotFound} />
        
            
        
              

 </Switch>
        }
      </div>
      </div>

</BrowserRouter>

);}
  }    

         
            
      
     




    
    

      
  

