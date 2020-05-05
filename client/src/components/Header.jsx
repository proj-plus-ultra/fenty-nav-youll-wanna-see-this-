import React from 'react';
import Nav from './Nav.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);

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
          <Nav />
        </div>
      </header>
    );
  }

}

export default Header;