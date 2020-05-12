import React from 'react';
import Nav from './Nav.jsx';
import Search from './Search.jsx';
import ShopDropdown from './shopDropdown.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearchBar: false,
      showSearchIcon: true,
      showShopDD: false,
      showRiRiDD: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
    this.shopHover = this.shopHover.bind(this);
  }

  shopHover() {

    this.setState({showShopDD: !this.state.showShopDD});

  }

  handleClick() {
    console.log('Clicked!');

    this.setState({
      showSearchBar: !this.state.showSearchBar
    });
  }

  closeSearch() {
    this.setState({
      showSearchBar: false
    });
  }

  render() {
    if (this.state.showSearchBar) {
      return (
        <div>
          <header>
            <div className='headerContainer' style={{padding: '20px 20px 20px 20px'}}>
              <div className='logo'>
                {/*TODO: Change src to whatever/wherever the homepage is*/}
                <a src='#'/>
                <img src="https://feccapstone.s3-us-west-1.amazonaws.com/header.png" alt="fentybeauty-logo" border="0" className='logo-img'/>
              </div>
              <Nav showSearch={this.handleClick} handleShopHover={this.shopHover}/>
            </div>
          </header>
          <ShopDropdown isShow={this.state.showShopDD} close={this.shopHover}/>
          <div>
            <Search closeSearch={this.closeSearch} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <header>
            <div className='headerContainer' style={{padding: '20px 20px 20px 20px'}}>
              <div className='logo'>
                {/*TODO: Change src to whatever/wherever the homepage is*/}
                <a src='#'/>
                <img src="https://feccapstone.s3-us-west-1.amazonaws.com/header.png" alt="fentybeauty-logo" border="0" className='logo-img'/>
              </div>
              <Nav showSearch={this.handleClick} handleShopHover={this.shopHover}/>
            </div>
          </header>
          <ShopDropdown isShow={this.state.showShopDD} handleHover={this.shopHover}/>
        </div>
      );
    }

  }

}

export default Header;