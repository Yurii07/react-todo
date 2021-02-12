import React, { Component } from 'react';

class SearchBarComponent extends Component {
  render() {
    return (
    <div className="ui input fluid"> 
        <input autoComplete="off" placeholder="Search Term" type="text" name="searchTerm"/>
    </div>
    );
  }
}

export default SearchBarComponent;