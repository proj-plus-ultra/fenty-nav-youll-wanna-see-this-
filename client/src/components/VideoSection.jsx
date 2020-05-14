import React from 'react';
import axios from 'axios';

import Videos from './Videos/Videos.jsx';
class VideoSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      videos: [],
      current: ''
    };
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }
  getProducts() {
    axios.get('http://localhost:4201/products')
      .then((res) =>{
        console.log('Got Products!', res.data);
        let randomProduct = Math.floor(Math.random() * res.data.length);
        this.setState({
          products: res.data,
          current: res.data[randomProduct].name
        }, () => this.getYouTubeVideos(this.state.current));
      })
      .catch((err) => console.error(err));
  }

  getYouTubeVideos(name) {
    let nameToSearch = name;
    axios.get('http://localhost:4201/videos', {params: {productName: nameToSearch}})
      .then((res) =>{
        console.log('Sent request to backend and received:', res.data);
        this.setState({
          videos: res.data.items
        });
      })
      .catch((err)=> console.error(err));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    let videoStyle = {
      backgroundImage: "url(https://feccapstone.s3-us-west-1.amazonaws.com/video_background.jpg)",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
    };

    return (
      <div className='videoSection' style={videoStyle}>
        <Videos videos={this.state.videos}/>
      </div>
    );
  }
}

export default VideoSection;