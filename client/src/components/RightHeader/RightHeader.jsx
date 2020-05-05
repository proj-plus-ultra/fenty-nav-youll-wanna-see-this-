import React from 'react';

class RightHeader extends React.Component {
  constructor(props) {
    super(props);


  }


  render() {
    return (
      <div className='rightHeader'>
        <ul className='rightList'>
          <li><p>Search</p></li>
          <li> <img src="https://i.ibb.co/0FWLjfJ/login-icon.png" alt="login-icon" border="0" className='actImg'/></li>
          <li></li>
        </ul>
      </div>
    );
  }
}


export default RightHeader;