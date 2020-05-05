import React from 'react';
import NavItem from './NavItem.jsx';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: ['SHOP', 'SALE', 'SHADE FINDER', 'RIHANNA', 'CLARA LIONEL FOUNDATION']
    };
  }


  render() {
    return (
      <div className='navContainer'>
        <nav className='navbar'>
          <div className='navFlexBox'>
            <ul className='nav-List'>
              {this.state.navItems.map((item, i) =>{
                return (
                  <NavItem item={item} key={i}/>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;


