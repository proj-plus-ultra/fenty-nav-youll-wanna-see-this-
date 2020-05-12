import React from 'react';
import NavItem from './NavItem.jsx';
import RightHeader from './RightHeader.jsx';

class Nav extends React.Component {
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

export default Nav;


