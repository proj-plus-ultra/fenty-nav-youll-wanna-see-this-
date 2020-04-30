import React from 'react';
import getVideos from './getVideos.jsx';
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
  }

  getProducts() {
    axios.get('/products')
      .then((res) =>{
        console.log('Got Products!', res.data);
        this.setState({
          products: res.data
        });
      })
      .catch((err) => console.error(err));
  }

  getYouTubeVideos(name) {
    let key = props.API_key;
    let toGet = this.state.current;
    getVideos({key, toGet}, (err, results) =>{
      if (err) {
        console.error('Error Getting Videos:', err);
      } else {
        this.setState({
          vidoes: results
        }, () => console.log('Retrieved Videos!', this.state.vidoes));
      }
    });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className = "body">
        <Videos />
        <Footer />
      </div>
    );
  }


}

export default App;