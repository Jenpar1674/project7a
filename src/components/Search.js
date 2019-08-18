import React, { Component } from 'react';
//import {withRouter} from 'react-router-dom'

export default class Search extends Component {
  state = {
    searchText:''
}

onSearchChange =e=>{
    this.setState({searchText:e.target.value});
}
handleSubmit = e =>{
  e.preventDefault();
  this.props.onSearch(this.state.searchText);
  console.log(this.state.searchText);
  e.currentTarget.reset();
     }

    render() { 
        return(
          <form className="search-form" onSubmit={this.handleSubmit} >
          <label className="is-hidden" htmlFor="search"></label>
          <input type="search" 
                 onChange={this.onSearchChange}
                 name="search" 
                 placeholder="Search" />
          <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
        </form>      
      );
    }
  }

            
