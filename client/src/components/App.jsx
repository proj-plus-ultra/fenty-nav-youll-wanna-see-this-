import React from 'react';
import axios from 'axios';
import getVideos from '../scripts/getVideos.js';
import Videos from './Videos.jsx';
import Footer from './Footer.jsx';


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
          current: res.data[14].name
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
    return (
      <div className = "body">
        <section className='videoSection'>
          <Videos videos={this.state.videos}/>
        </section>
        <Footer />
      </div>
    );
  }


}

export default App;