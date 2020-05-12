import React from 'react';

class shopDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let shop1Style = {
      display: this.props.isShow ? 'block' : 'none'
    };

    let shop1 = ['SHOP ALL', 'SHOW NEW', 'BEST SELLERS', 'NEW! CHEEKS OUT COLLECTION', 'COLLECTIONS', 'SALE', 'FOUNDATION SHADE FINDER', 'E-GIFT CARDS'];
    return (

      <div className='showShopDD' style={shop1Style}>
        <ul className='shopDD1'>
          {shop1.map((item, i) =>{
            return (
              <li className='dd1' key={i}>{item}</li>
            );
          })}
        </ul>
      </div>

    );
  }
}



export default shopDropdown;