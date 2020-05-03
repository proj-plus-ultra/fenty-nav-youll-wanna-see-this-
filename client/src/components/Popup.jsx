import React from 'react';
import ReactDom from 'react-dom';
import Popup from 'reactjs-popup';
const buttonSource = 'https://www.fentybeauty.com/on/demandware.static/-/Sites-FENTY-Library/default/dwbba3103b/homepage/playbutton_mobile.svg';


class VideoPopup extends React.Component{
  constructor(props){
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }



  render(){
    return (
      <div>
         <button className="button" onClick={this.openModal}>
          Controlled Popup
        </button>

        <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeModal}>
          <div className="modal">
            <iframe frameborder="0"src={`https://www.youtube.com/embed/${this.props.vidId}`} width="640" height="360"></iframe>
            {this.props.title}
          </div>
        </Popup>
      </div>
    );
  }

}



export default VideoPopup;