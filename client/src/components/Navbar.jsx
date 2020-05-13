import React from 'react';
import axios from 'axios';


import Header from './Navbar/Header.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let bodyStyle = {
      backgroundColor: 'white',
      fontFamily: 'brown-regular,Questrial,Times,Arial,sans-serif',
      listStyleType: 'none'
    };

    return (
      <div className='header' style={bodyStyle}>
        <Header />
      </div>
    );
  }
}

export default Navbar;