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

              <NavItem handleShopHover={this.props.handleShopHover} handleRiHover={this.props.handleRiHover}/>

            </ul>
          </div>
        </nav>
        <RightHeader showSearch={this.props.showSearch}/>
      </div>

    );
  }
}

export default FentyNav;

