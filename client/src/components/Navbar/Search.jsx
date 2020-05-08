import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'What Are You Looking For?',
      products: []
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    console.log(e.target.value);
    this.setState({
      query: e.target.value
    });
  }

  handleSubmit(e) {
    //this will query the database based on what is typed
    //search results show up as sooon as 1 character is entered
  }


  render() {
    return (
      <div className='searchBar'>
        <input type='text' value={this.state.query} onChange={this.handleSearch} onClick={()=>this.setState({query: ''})}className='searchBox'></input>
        <span className='butt' onClick={this.props.closeSearch} >X</span>
      </div>
    );
  }
}

export default Search;