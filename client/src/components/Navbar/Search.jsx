import React from 'react';
import axios from 'axios';
import SearchResults from './SearchResults.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'What Are You Looking For?',
      clicked: false,
      products: [],
      searched: false
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearch(e) {
    console.log(e.target.value);
    this.setState({
      query: e.target.value
    }, () => {
      this.handleSubmit();
    });
  }

  handleClick() {
    console.log('Click from Search!');
    this.setState({
      query: '',
      clicked: true
    });
  }

  handleSubmit() {
    //this will query the database based on what is typed
    //search results show up as sooon as 1 character is entered
    let toQuery = this.state.query;

    axios.get('/search', {params: {search: toQuery}})
      .then((res) =>{
        console.log('Searched:', res.data);
        this.setState({
          products: res.data,
          searched: true
        }, ()=>console.log(this.state.products));
      })
      .catch((err)=>console.error(err));
  }



  render() {
    let style = {
      backgroundImage: this.state.clicked ? 'none' : 'url(https://i.ibb.co/HFLDpj0/Screen-Shot-2020-05-06-at-8-55-48-PM.png)',
      paddingLeft: this.state.clicked ? '4px' : '60px'
    };

    //padding order is top right bottom left
    let resultsStyle = {
      backgroundColor: 'white',
      color: '#000',
      padding: '1px 50px 2px 110px'
    };

    let allStyle = {
      textAlign: 'center',
      textDecoration: 'underline',
      borderTop: '1px solid black',
      backgroundColor: 'white',
      color: 'black',
      padding: '30px'
    };

    if (this.state.searched) {
      return (
        <div className='searchWithResults'>
          <div className='searchBar'>
            <input type='text' style={style} value={this.state.query} onChange={this.handleSearch} onClick={this.handleClick}className='searchBox'></input>
            <span className='butt' onClick={this.props.closeSearch}>X</span>
          </div>

          <div className='searchResultsContainer' style={resultsStyle}>
            <SearchResults products={this.state.products}/>
          </div>

          <div className='resultsFooter' style={allStyle}>
            <strong><h3 style={{cursor: 'pointer'}}>SEE ALL RESULTS</h3></strong>
          </div>
        </div>

      );
    } else {
      return (
        <div className='searchBar'>
          <input type='text' style={style} value={this.state.query} onChange={this.handleSearch} onClick={this.handleClick} className='searchBox'/>
          <span className='butt' onClick={this.props.closeSearch}>X</span>
        </div>
      );
    }
  }
}

export default Search;