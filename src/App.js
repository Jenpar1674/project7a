import React,{ Component } from 'react';
import './App.css';
import Search from './Components/Search';
import Navbar from './Components/Navbar';
import Photos from './Components/Photos';

import {Route} from 'react-router-dom'
import axios from 'axios'
import apiKey from './Components/config';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import { BrowserRouter, Switch } from 'react-router-dom';
import Results from './Components/Results';
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
  
  this.performSearch('butterflies');
  this.performSearch('bobcats');
  this.performSearch('badges');
  this.performSearch(); // this might not be needed
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
    <Header/ >
    
    <Search onSearch={this.performSearch}/>           
      

    <Navbar onClick={this.performSearch}/>
    
        <Switch>


        <Route exact path='/' render={ () => ( 
                  <div className="main-content">
                    {
                      this.state.loading ? <p> Loading ...</p> : this.state.pics ? <Photos pics={ this.state.pics } /> : <NotFound /> 
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
        {/* Route exact path="/"  />
                  <Route path="/butterflies" render={ () =>
                    (this.state.loading)
                    ? <h2>Loading...</h2>
                    : <Photos pics={this.state.butterflies} query="butterflies" />
                  } />
                  <Route path="/bobcats" render={ () =>
                    (this.state.loading)
                    ? <h2>Loading...</h2>
                    : <Photos pics={this.state.bobcats} query="bobcats" />
                  } />
                  <Route path="/badges" render={ () =>
                    (this.state.loading)
                    ? <h2>Loading...</h2>
                    : <Photos pics={this.state.badges} query="badges" />
                  } />
                  <Route path="/search" render={ () =>
                    (this.state.loading)
                    ? <h2>Loading...</h2>
                    : <Photos pics={this.state.pics}/>
                  } />
 */}

            
        {/* renders data to the proper url pages showing each unique image array   */}
                 {/* <Route exact path="/search" component={() => <Photos pics={this.state.pics} />} />
                <Route exact path="/butterflies" component={() => <Photos pics={this.state.butterflies} />} />
                <Route exact path="/bobcats" component={() => <Photos pics={this.state.bobcats} />} />
                <Route exact path="/badges" component={() => <Photos pics={this.state.badges} />} />
                <Route exact path='/' component={() => <Photos pics={this.state.pics} />} /><Results/>
               <Route component={() => <NotFound />} /> */}

      
              
{/* <Photos pics/>        */}
 </Switch>
        }
      </div>
     
</div>
</BrowserRouter>

);}
  }    
/* 
      {/* // Search form rendered to index and search pages 
              
      // <div className="performSearch">
      
      //   <Navbar />
        
         
            
      
      //     
      // <div className="main-content">
      
      //         <Switch>
      //         {/* renders data to the proper url pages showing each unique image array   */
      //           <Route exact path="/search" component={() => <Photos pics={this.state.pics} />} />
      //           <Route exact path="/butterflies" component={() => <Photos pics={this.state.butterflies} />} />
      //           <Route exact path="/bobcats" component={() => <Photos pics={this.state.bobcats} />} />
      //           <Route exact path="/badges" component={() => <Photos pics={this.state.badges} />} />
      //           <Route exact path='/' component={() => <Photos pics={this.state.pics} />} />
      //           <Route component={() => <NotFound />} />
      //         </Switch> */}
      //   }

      //     </div>
          
      // </div>
      
        
      // </div>
   

  
// );}
//   }



    
    

      
  

