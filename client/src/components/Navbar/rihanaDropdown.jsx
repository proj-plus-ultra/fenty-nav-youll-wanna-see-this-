import React from 'react';



const riDropDown = (props) =>{

  let listOne = ['RIHANNA"S FAVES', 'SHOP THE LOOK', 'YOU DID THAT', '@FENTYBEAUTY', 'VIDEOS'];

  let listTwo = ['FEATURED', 'TUTORIAL TUESDAYS', 'MORE TUTORIALS'];

  let listThree = ['FENTY BEAUTY', 'THE MAKEUP', 'ARTISTRY'];

  let style = {
    display: props.show ? 'block' : 'none',
    padding: '50px 20px 25px 10px',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
  };

  return (
    <div className='rihana-dropdown' style={style} onMouseLeave={props.close}>
      <img src='https://feccapstone.s3-us-west-1.amazonaws.com/rih_dropdown-menu.jpg'/>
    </div>

  );

};

export default riDropDown;