import React from 'react';

class shopDropdown extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    let shopStyle = {
      display: this.props.isShow ? 'block' : 'none',
      padding: '50px 20px 25px 10px',
      letterSpacing: '2px',
      fontSize: '13px',
      width: '100%',
      position: 'fixed',
      backgroundColor: 'white',
      zIndex: '9'
    };

    let dd1Style = {
      marginBottom: '10px',
      fontFamily: 'brown-regular,Questrial,Times,Arial,sans-serif',
      fontWeight: 'bold',
      paddingBottom: '12px'

    };

    let shop1 = ['SHOP ALL', 'SHOW NEW', 'BEST SELLERS', 'NEW! CHEEKS OUT COLLECTION', 'COLLECTIONS', 'SALE', 'FOUNDATION SHADE FINDER', 'E-GIFT CARDS'];

    let face = ['Foundation', 'Prime + Set', 'Concealer', 'Powder', 'Contour', 'Blotting'];
    let cheek = ['Blush', 'Bronzer', 'Highlighter'];
    let lip = ['Lip Gloss', 'Lipstick', 'Lip Care'];
    let eye = [ 'BROW', 'BODY'];
    let misc = ['MINIS + Travel Size', 'VALUE SETS + VAULTS', 'BRUSHES + TOOLS', 'ACCESSORIES', 'EXCLUSIVES', "RIHANNA's FAVES"];


    return (

      <div className='showShopDD' style={shopStyle} onMouseLeave={this.props.close}>

        <div className='list-one' style={{position: 'relative', float: 'left', paddingLeft: '300px'}}>

          <ul className='shopDD1'>
            {shop1.map((item, i) =>{
              return (
                <li className='dd1' key={i} style={dd1Style}>{item}</li>
              );
            })}
          </ul>
        </div>


        <div className = 'list-two' style={{position: 'relative', float: 'left', paddingLeft: '100px' }}>
          <ul className='faceDD'>
            <li>
              <strong><h3 style={{paddingBottom: '15px'}}>FACE</h3></strong>
              <ul className='faceDD'>
                {face.map((item, i) =>{
                  return (
                    <li className='faceElem' key={i} style={{fontSize: '10px', paddingBottom: '17px'}}>{item}</li>
                  );
                })}
              </ul>
            </li>
            <li style={{paddingTop: '30px'}}>
              <strong><h3 style={{paddingBottom: '15px'}} >CHEEK</h3></strong>
              <ul className='cheekDD'>
                {cheek.map((item, i) =>{
                  return (
                    <li className='cheek' key={i} style={{fontSize: '10px', paddingBottom: '17px'}}>{item}</li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>

        <div className = 'list-three' style={{position: 'relative', float: 'left', paddingLeft: '100px' }}>
          <ul className='lipDD'>
            <li>
              <strong><h3 style={{paddingBottom: '15px'}}>LIP</h3></strong>
              <ul>
                {lip.map((item, i) =>{
                  return (
                    <li className='lip' key={i} style={{fontSize: '10px', paddingBottom: '23px'}}>{item}</li>
                  );
                })}
              </ul>
            </li>
            <li style={{paddingTop: '30px'}}>
              <strong><h3 style={{paddingBottom: '15px'}} >EYE</h3></strong>
              <ul className='eyeDD'>
                {eye.map((item, i) =>{
                  return (
                    <li className='cheek' key={i} style={{fontSize: '10px', paddingBottom: '17px'}}>{item}</li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>

        <div className = 'list-three' style={{position: 'relative', float: 'left', paddingLeft: '100px' }}>
          <ul className='faceDD'>
            {misc.map((item, i)=>{
              return (
                <li className='misc' key={i} style={{paddingBottom: '15px'}}><h3>{item}</h3></li>
              );
            })}
          </ul>
        </div>


        <div className='shop-pic' style={{position: 'relative', float: 'left', paddingLeft: '100px'}}>
          <img src='https://feccapstone.s3-us-west-1.amazonaws.com/shop-picture.jpg' style={{cursor: 'pointer'}}/>
          <h3 style={{paddingLeft: '25%'}}>NEW!</h3> <br/>
          <h3 style={{paddingLeft: '14%'}}>CHEEKS OUT</h3> <br/>
          <h3 style={{paddingLeft: '8%'}}>FREESTYLE CREAM BLUSH</h3> <br/>
        </div>
      </div>

    );
  }
}



export default shopDropdown;

