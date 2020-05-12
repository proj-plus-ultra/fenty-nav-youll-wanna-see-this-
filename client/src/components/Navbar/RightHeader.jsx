import React from 'react';

class RightHeader extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className='rightHeader'>
        <ul className='rightList'>
          <li onClick={this.props.showSearch}><img src="https://i.ibb.co/2tBFgVx/Screen-Shot-2020-05-05-at-3-07-23-PM.png" border="0" className='search'/></li>
          <li><img src="https://i.ibb.co/0FWLjfJ/login-icon.png" alt="login-icon" border="0" className='actImg'/></li>
          <li><img src="https://i.ibb.co/v1zZB92/Screen-Shot-2020-05-05-at-3-16-41-PM.png" alt="shopping-bag-image" border="0" className='bag'/></li>
        </ul>
      </div>
    );

  }
}


export default RightHeader;