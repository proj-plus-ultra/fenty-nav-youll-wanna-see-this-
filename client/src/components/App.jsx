import React from 'react';
import getVideos from '../scripts/getVideos.js';
import axios from 'axios';
import Videos from './Videos.jsx';
import Footer from './Footer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      viedos: [],
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
          current: res.data[0].name
        });
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
        vidoes: results.data.items
      }, () => console.log('Retrieved Videos!', this.state.vidoes));

    });
  }

  componentDidMount() {
    this.getProducts();
    this.getYouTubeVideos();
  }

  render() {
    return (
      <div className = "body">
        <Videos videos={this.state.videos}/>
        <Footer />
      </div>
    );
  }


}

export default App;