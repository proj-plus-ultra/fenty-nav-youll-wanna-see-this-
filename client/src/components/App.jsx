import React from 'react';
import axios from 'axios';
import getVideos from '../scripts/getVideos.js';
import Videos from './Videos.jsx';
import Header from './Navbar/Header.jsx';

class App extends React.Component {
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
    axios.get('/products')
      .then((res) =>{
        console.log('Got Products!', res.data);
        this.setState({
          products: res.data,
          current: res.data[12].name
        }, () => this.getYouTubeVideos(this.state.current));
      })
      .catch((err) => console.error(err));
  }

  getYouTubeVideos(name) {

    let param = {
      key: this.props.API_KEY,
      productName: this.state.current
    };

    getVideos(param, (results) =>{

      this.setState({
        videos: results.data.items
      }, () => console.log('Retrieved Videos!', this.state.videos));

    });
  }

  componentDidMount() {
    this.getProducts();

  }

  render() {

    let videoStyle = {
      backgroundImage: "url(https://feccapstone.s3-us-west-1.amazonaws.com/video_background.jpg)",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%'
    };

    return (
      <div className = "body">
        <div className='headerBox'>
          <Header />
        </div>

        <section className='videoSection' style={videoStyle}>
          <Videos videos={this.state.videos}/>
        </section>
      </div>
    );
  }


}

export default App;