import React from 'react';
import ReactDom from 'react-dom';
import Popup from 'reactjs-popup';

class VideoPopup extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='container'>
        <Popup open={this.props.isOpen} closeOnDocumentClick onClose={this.props.close}>
          <div className="modal">
            <iframe frameBorder="0"src={`https://www.youtube.com/embed/${this.props.vidId}`} width="640" height="360"></iframe>
            <p className='title'>{this.props.title}</p>
          </div>
        </Popup>
      </div>
    );
  }

}



export default VideoPopup;