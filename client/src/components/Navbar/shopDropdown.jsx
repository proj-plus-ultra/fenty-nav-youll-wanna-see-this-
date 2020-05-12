import React from 'react';

class shopDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let shop1Style = {
      display: this.props.isShow ? 'block' : 'none',
      padding: '30px 20px 25px 10px',
      letterSpacing: '2px',
      fontSize: '13px',
      fontWeight: 'bold'
    };

    let shop1 = ['SHOP ALL', 'SHOW NEW', 'BEST SELLERS', 'NEW! CHEEKS OUT COLLECTION', 'COLLECTIONS', 'SALE', 'FOUNDATION SHADE FINDER', 'E-GIFT CARDS'];

    let face = ['Foundation', 'Prime + Set', 'Concealer', 'Powder', 'Contour', 'Blotting'];
    let cheek = ['Blush', 'Bronzer', 'Highlighter'];
    let lip = ['Lip Gloss', 'Lipstick', 'Lip Care'];
    let eye = [ 'BROW', 'BODY'];
    let misc = ['MINIS + Travel Size', 'VALUE SETS + VAULTS', 'BRUSHES + TOOLS', 'ACCESSORIES', 'EXCLUSIVES', "RIHANNA's FAVES"];
    return (

      <div className='showShopDD' style={shop1Style} onMouseLeave={this.props.close}>
        <ul className='shopDD1' style={{paddingLeft: '300px', textAlign: 'left'}}>
          {shop1.map((item, i) =>{
            return (
              <li className='dd1' key={i}>{item}</li>
            );
          })}
        </ul>

        <div className='faceDDD' style={{position: 'relative', textAlign: 'center', top: '0'}}>
          <ul className='faceDD' >
            <li>
              <h3>FACE</h3>
              <ul>
                {face.map((item, i) =>{
                  return (
                    <li className='faceElem' key={i} style={{fontSize: '10px'}}>{item}</li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>

      </div>

    );
  }
}



export default shopDropdown;