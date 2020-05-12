import React from 'react';

class NavItem extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {

    return (
      <div>
        <li className='navListItem' onMouseEnter={this.props.handleShopHover} >SHOP</li>
        <li className='navListItem'>SALE</li>
        <li className='navListItem'>SHADE FINDER</li>
        <li className='navListItem'>RIHANNA</li>
        <li className='navListItem'>CLARA LIONEL FOUNDATION</li>
      </div>
    );

  }

}

export default NavItem;


