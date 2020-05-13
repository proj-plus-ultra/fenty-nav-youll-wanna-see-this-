import React from 'react';

class RightHeader extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let searchStyle = {
      marginRight: '15px',
      height: '40px',
      width: 'auto'
    };

    let bagStyle = {
      marginRight: '150px',
      height: '40px',
      width: 'auto'
    };

    let rightListStyle = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    };

    return (
      <div className='rightHeader' style={{paddingLeft: '100px'}}>
        <ul className='rightList' style={rightListStyle}>
          <li onClick={this.props.showSearch}><img src="https://feccapstone.s3-us-west-1.amazonaws.com/search_icon.png" border="0" className='search' style={searchStyle}/></li>
          <li><img src="https://feccapstone.s3-us-west-1.amazonaws.com/login-icon.png" alt="login-icon" border="0" className='actImg' style={{width: '25px',
            marginRight: '15px'}}/></li>
          <li><img src="https://feccapstone.s3-us-west-1.amazonaws.com/bag_icon.png" alt="shopping-bag-image" border="0" className='bag' style={bagStyle}/></li>
        </ul>
      </div>
    );

  }
}


export default RightHeader;