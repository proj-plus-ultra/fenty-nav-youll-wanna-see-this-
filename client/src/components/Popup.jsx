import React from 'react';

class Popup extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.toggle();
  }

  render(){
    return (
      <div className='popup'>
      <div className='popup_content'>
        <span className="close" onClick={this.handleClick}>&times;</span>
        <p>Test</p>
      </div>
    </div>
    )
  }

}


export default Popup;