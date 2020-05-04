import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: ['SHOP', 'SALE', 'SHADE FINDER', 'RIHANNA', 'CLARA LIONEL FOUNDATION']
    };
  }


  render() {
    return (
      <header>
        <div className='headerContainer'>
          <div className='logo'>
            {/*TODO: Change src to whatever/wherever the homepage is*/}
            <a src='#'/>
            <img src="https://i.ibb.co/1RyTT3n/fentybeauty-logo.png" alt="fentybeauty-logo" border="0" className='logo-img'/>
          </div>
          <div className='navContainer'>
            <nav className='navbar'>

            </nav>
          </div>
        </div>
      </header>
    );
  }

}

export default Header;