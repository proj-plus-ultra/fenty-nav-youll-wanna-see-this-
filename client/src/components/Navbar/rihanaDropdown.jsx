import React from 'react';



const riDropDown = (props) =>{

  let listOne = ["RIHANNA'S FAVES", 'SHOP THE LOOK', 'YOU DID THAT', '@FENTYBEAUTY'];

  let listTwo = ['FEATURED', 'TUTORIAL TUESDAYS', 'MORE TUTORIALS'];

  let listThree = ['FENTY BEAUTY', 'THE MAKEUP', 'ARTISTRY'];

  let style = {
    display: props.show ? 'block' : 'none',
    padding: '50px 20px 25px 10px',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    fontFamily: 'brown-regular,Questrial,Times,Arial,sans-serif',
    letterSpacing: '2px',

  };

  return (
    <div className='rihana-dropdown' style={style} onMouseLeave={props.close}>
      <div className='rihanna-dropdown-image' style={{position: 'relative', float: 'left', paddingLeft: '625px', fontWeight: '900', fontSize: '12px', textAlign: 'center'}}>
        <img src='https://feccapstone.s3-us-west-1.amazonaws.com/rih_dropdown-menu.jpg' style={{paddingBottom: '10px'}}/>

        <h1>GET RIHANNA'S</h1>
        <h1>LOOK</h1>

      </div>
      <div className='rihanna-dropdown-list' style={{position: 'relative', float: 'left', paddingLeft: '100px' }}>
        <ul className='list-one'>
          {listOne.map((item, i) =>{
            return (
              <li className='ri-DD-list-one' key={i} style={{paddingBottom: '15px', fontSize: '12px'}}>{item}</li>
            );
          })}
        </ul>
        <h1 style={{paddingBottom: '10px'}}>VIDEOS</h1>
        <ul className='list-two'>
          {listTwo.map((item, i) =>{
            return (
              <li className='ri-dd-list-two' key={i} style={{paddingBottom: '10px', fontSize: '12px'}}>{item}</li>
            );
          })}
        </ul>
        <h1 style={{padding: '20px 0px 15px'}}>ABOUT</h1>
        <ul className='list-three'>
          {listThree.map((item, i) =>{
            return (
              <li className='ri-dd-list-threee' key={i} style={{paddingBottom: '10px', fontSize: '12px'}}>{item}</li>
            );
          })}
        </ul>
      </div>
    </div>

  );

};

export default riDropDown;