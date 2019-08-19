import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Search extends Component {
  constructor(props){
    super(props);

  this.state = {
    searchText:'',
    loading: false
}
  }
onSearchChange =(e)=>{
    this.setState({
      searchText:e.target.value,
      loading:true
    });
}
handleSubmit = (e) =>{
  e.preventDefault();
  let value =this.searchText.value;
  let path= `/${value}`
  this.props.history.push(path);
  this.props.onSearch(value);
  this.setState({
    searchText:''
  })
  
     }

    render() {
        return(
          <form className="search-form" onSubmit={this.handleSubmit} >
          <label className="is-hidden" htmlFor="search"></label>
          <input type="search" 
                 onChange={this.onSearchChange}
                 name="search" 
                 ref={(input)=>this.searchText=input}
                 placeholder="Search..." />
                 
          <button 
          type="submit" 
          value="&#x1F50D;"
          id="submit" 
          className="search-button">
            <i className="material-icons icn-search">search</i></button>
        </form>      
      );
    }
  }

export default withRouter(Search)            
