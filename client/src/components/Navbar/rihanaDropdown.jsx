import React from 'react';

const riDropDown = (props) =>{

  let style = {
    display: props.show ? 'block' : 'none',
    padding: '50px 20px 25px 10px',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
  };
  return (
    <div className='rihana-dropdown' style={style} onMouseOut={props.close}>
      rihana
    </div>

  );

};

export default riDropDown;