import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'What Are You Looking For?',
      clicked: false,
      products: []
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearch(e) {
    console.log(e.target.value);
    this.setState({
      query: e.target.value
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
          products: res.data
        });
      })
      .catch((err)=>console.error(err));
  }



  render() {
    let style = {
      backgroundImage: this.state.clicked ? 'none' : 'url(https://i.ibb.co/HFLDpj0/Screen-Shot-2020-05-06-at-8-55-48-PM.png)',
      paddingLeft: this.state.clicked ? '4px' : '60px'
    };

    return (
      <div className='searchBar'>
        <input type='text' style={style} value={this.state.query} onChange={this.handleSearch} onClick={this.handleClick}className='searchBox'></input>
        <span className='butt' onClick={this.props.closeSearch}>X</span>
      </div>
    );
  }
}

export default Search;