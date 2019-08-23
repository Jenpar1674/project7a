//Import React library
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Search extends Component  {

  //Gets updated with onSearchChange
  state = {
    searchText: ''
  }

  //Text user types into input field
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  //Called when form is submitted
  handleSubmit = e => {
    e.preventDefault();
    const path = `/search/${this.state.searchText}`;
    this.props.history.push(path);
    this.props.onSearch(this.state.searchText);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >

        <input type="search"
               onChange={this.onSearchChange}
               name="search"
              ref={(input) => this.query = input}
               placeholder="Search..." />
        <button type="submit" id="submit"><i className="material-icons icn-search">search</i></button>

      </form>
    );
  }
}



export default withRouter(Search)            
