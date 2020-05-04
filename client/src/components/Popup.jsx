import React from 'react';
import ReactDom from 'react-dom';
import Popup from 'reactjs-popup';
const buttonSource = 'https://www.fentybeauty.com/on/demandware.static/-/Sites-FENTY-Library/default/dwbba3103b/homepage/playbutton_mobile.svg';


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