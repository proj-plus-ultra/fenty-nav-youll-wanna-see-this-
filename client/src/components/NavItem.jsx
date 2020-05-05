import React from 'react';

class NavItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <li className='navListItem'>
        {this.props.item}
      </li>


    );
  }

}

export default NavItem;