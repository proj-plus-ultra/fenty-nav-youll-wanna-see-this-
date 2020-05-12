import React from 'react';

class NavItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showShop: false,
      showRiRi: false
    };
  }

  render() {

    if (this.state.showShop) {
      return (
        <div>
          <div>
            <li className='navListItem'>SHOP</li>
            <li className='navListItem'>SALE</li>
            <li className='navListItem'>SHADE FINDER</li>
            <li className='navListItem'>RIHANNA</li>
            <li className='navListItem'>CLARA LIONEL FOUNDATION</li>
          </div>

          <div className='riDropDown'>
          testy shop
          </div>
        </div>
      );

    } else if (this.state.showRiRi) {
      return (
        <div>
          <div>
            <li className='navListItem'>SHOP</li>
            <li className='navListItem'>SALE</li>
            <li className='navListItem'>SHADE FINDER</li>
            <li className='navListItem'>RIHANNA</li>
            <li className='navListItem'>CLARA LIONEL FOUNDATION</li>
          </div>

          <div className='riDropDown'>
          testy
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <li className='navListItem'>SHOP</li>
          <li className='navListItem'>SALE</li>
          <li className='navListItem'>SHADE FINDER</li>
          <li className='navListItem'>RIHANNA</li>
          <li className='navListItem'>CLARA LIONEL FOUNDATION</li>
        </div>
      );
    }
  }

}

export default NavItem;


