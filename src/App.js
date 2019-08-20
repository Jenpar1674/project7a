import React,{ Component } from 'react';
import './App.css';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Photos from './components/Photos';

import {Route} from 'react-router-dom'
import axios from 'axios'
import apiKey from './components/config';
import Header from './components/Header';
//import NotFound from './components/NotFound';
import { BrowserRouter, Switch } from 'react-router-dom';
import Results from './components/Results';
//import { Jumbotron } from 'react-bootstrap';

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
  this.performSearch('rainbows');
  this.performSearch('butterflies');
  this.performSearch('bobcats');
  this.performSearch('badges');
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
      rainbows: response.data.photos.photo,
      loading: false
    });
    console.log(this.state.pics);

  }
})
.catch((error) => {
  console.log('Error fetching and parsing data', error);
});
}
//   .catch(error =>{console.log('Error fetching and parsing data', error);
// });
// ;
// searchButterflies=(query='butterflies')=>//image array for butterflies
//   axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
//   .then(res=>{
//     this.setState({
//       butterflies: res.data.photos.photo,
//       loading:false
//     })
//   })
//   .catch(error =>{console.log('Error fetching and parsing data', error);
// });
// ;
// searchBobcats=(query='bobcats')=>//image array for 
//   axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
//   .then(res=>{
//     this.setState({
//       bobcats: res.data.photos.photo,
//       loading:false
//     })
//   })
//   .catch(error =>{console.log('Error fetching and parsing data', error);
// });
// ;
// searchBadges=(query='badges')=>//image array for badges
//   axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
//   .then(res=>{
//     this.setState({
//       badges: res.data.photos.photo,
//       loading:false
//     })
//   })
//   .catch(error =>{console.log('Error fetching and parsing data', error);
// });
// ;
render(){
  // console.log(this.state.pics);
  return (
   
  <BrowserRouter>
    <div className="jumbotron">
    <div className="container">
    <Header/>
    <Route
                render={props =>
                  <Search {...props} onSearch={this.performSearch} />
                }
              />
              <Route exact path="/" component={() => <Search onSearch={this.performSearch} />} />
              <Route path="/search" component={() => <Search onSearch={this.performSearch} />} />

    <Navbar onClick={this.search}/>
    
        {
          (this.state.loading)
          ? <h4>Loading..</h4>
          : 
         
        <Switch>
        Route exact path="/"  />
                  <Route path="/butterflies" render={ () =>
                    (this.state.loading)
                    ? <h4>Loading...</h4>
                    : <Photos pics={this.state.butterflies} query="butterflies" />
                  } />
                  <Route path="/bobcats" render={ () =>
                    (this.state.loading)
                    ? <h4>Loading...</h4>
                    : <Photos pics={this.state.bobcats} query="bobcats" />
                  } />
                  <Route path="/badges" render={ () =>
                    (this.state.loading)
                    ? <h4>Loading...</h4>
                    : <Photos pics={this.state.badges} query="badges" />
                  } />
                  <Route path="/search/:topic" render={ () =>
                    (this.state.loading)
                    ? <h4>Loading...</h4>
                    : <Photos pics={this.state.pics} query=''/>
                  } />
        
        <Results/>  
          <Route exact path= "/butterflies" render ={ () => <Results title = "Butterflies" />} />
          <Route exact path= "/bobcats" render ={ () => <Results title = "Bobcats" />} />
        <Route exact path= "/badges" render ={ () => <Results title = "Badges" />} />
      <Route exact path= "/" render ={ () => <Results title = "Cool Pics Below" />} />
     <Route exact path="/search" render={ () => <Results title = "Cool Pics Below"/>} />
      
<Route/>
        </Switch>
        }
      </div>
     
</div>
</BrowserRouter>

);}
  }    

      // {/* Search form rendered to index and search pages  */}
              
      // <div className="performSearch">
      
      //   <Navbar />
        
         
            
      
        
      // <div className="main-content">
      
      //         <Switch>
      //         {/* renders data to the proper url pages showing each unique image array   */}
      //           <Route exact path="/search" component={() => <Photos pics={this.state.pics} />} />
      //           <Route exact path="/butterflies" component={() => <Photos pics={this.state.butterflies} />} />
      //           <Route exact path="/bobcats" component={() => <Photos pics={this.state.bobcats} />} />
      //           <Route exact path="/badges" component={() => <Photos pics={this.state.badges} />} />
      //           <Route exact path='/' component={() => <Photos pics={this.state.pics} />} />
      //           <Route component={() => <NotFound />} />
      //         </Switch>
      //   }

      //     </div>
          
      // </div>
      
        
      // </div>
  

  
// );}
//   }



    
    

      
  

