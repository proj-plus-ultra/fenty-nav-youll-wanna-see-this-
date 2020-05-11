import React from 'react';
import RightHeader from './RightHeader.jsx';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class FentyNav extends React.Component {
  constructor(props) {
    super(props);



  }


  render() {
    return (
<<<<<<< HEAD
      <div className='navContainer'>
        <nav className='navbar'>
          <div className='navFlexBox'>
            <ul className='nav-List'>

              <NavItem />

            </ul>
          </div>
        </nav>
=======

      <div style={{textAlign: 'center', paddingTop: '10px'}}>
        <Navbar sticky="top" >
          <nav >
            <Nav.Link className='navItem'>SHOP</Nav.Link>
            <Nav.Link className='navItem'>SALE</Nav.Link>
            <Nav.Link className='navItem'>SHADE FINDER</Nav.Link>
            <Nav.Link className='navItem'>RIHANNA</Nav.Link>
            <Nav.Link className='navItem'>CLARA LIONEL FOUNDATION</Nav.Link>
          </nav>
        </Navbar>
>>>>>>> 77a11d5b6a2daced30fe10b80eb339f7d18c3b6a
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