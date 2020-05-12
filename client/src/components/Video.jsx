import React from 'react';
import ReactDOM from 'react-dom';
import VideoPopup from './Popup.jsx';
const buttonSource = 'https://www.fentybeauty.com/on/demandware.static/-/Sites-FENTY-Library/default/dwbba3103b/homepage/playbutton_mobile.svg';



class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    this.setState({ open: !this.state.open });
  }
  closeModal() {
    this.setState({ open: false });
  }


  render() {
    return (

      <div className='entry' onClick={this.openModal}>

        <VideoPopup title={this.props.video.snippet.title} vidId = {this.props.video.id.videoId} isOpen={this.state.open} open={this.openModal} close={this.closeModal}/>
        <img src={buttonSource} className='buttonPlay'></img>
        <img src={this.props.video.snippet.thumbnails.medium.url} className='thumbnail'></img>
        <div className='subtitle'>
          {this.props.video.snippet.title}
        </div>
      </div>
    );
  }
}



export default Video;




