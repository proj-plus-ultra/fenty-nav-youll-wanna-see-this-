import React from 'react';
import RightHeader from './RightHeader.jsx';
import NavItem from './NavItem.jsx';

class FentyNav extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className='navContainer'>
        <nav className='navbar'>
          <div className='navFlexBox'>
            <ul className='nav-List' style={{textAlign: 'center'}}>

              <NavItem handleShopHover={this.props.handleShopHover}/>

            </ul>
          </div>
        </nav>
        <RightHeader showSearch={this.props.showSearch}/>
      </div>

    );
  }
}

export default FentyNav;


/*
 <div className='navFlexBox'>
            <ul className='nav-List'>
              <li className='navListItem'>SHOP</li>
              <li className='navListItem'>SALE</li>
              <li className='navListItem'>SHADE FINDER</li>
              <li className='navListItem'>RIHANNA</li>
              <li className='navListItem'>CLARA LIONEL FOUNDATION</li>
            </ul>
          </div>
*/