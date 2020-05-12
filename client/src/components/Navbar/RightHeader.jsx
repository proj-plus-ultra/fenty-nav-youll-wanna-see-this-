import React from 'react';

class RightHeader extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className='rightHeader'>
        <ul className='rightList'>
          <li onClick={this.props.showSearch}><img src="https://feccapstone.s3-us-west-1.amazonaws.com/search_icon.png" border="0" className='search'/></li>
          <li><img src="https://feccapstone.s3-us-west-1.amazonaws.com/login-icon.png" alt="login-icon" border="0" className='actImg'/></li>
          <li><img src="https://feccapstone.s3-us-west-1.amazonaws.com/bag_icon.png" alt="shopping-bag-image" border="0" className='bag'/></li>
        </ul>
      </div>
    );

  }
}


export default RightHeader;