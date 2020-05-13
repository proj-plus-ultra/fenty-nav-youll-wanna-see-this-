const axios = require('axios');
const KEY = process.env.KEY || require('./config.js');

const searchYT = (productName, callback) =>{
  let paramsObj = {
    part: 'snippet',
    channelId: 'UC0HVR9T6oFS3veefhGCGEsw',
    key: KEY,
    q: productName,
    maxResults: 3,
    type: 'video',
    videoEmbeddable: true
  };

  axios.get('https://www.googleapis.com/youtube/v3/search', {params: paramsObj})
    .then((res) => {
      console.log('response from youtube:', res.data);
      callback(res.data);
    })
    .catch((err) => console.error(err));
};

module.exports = searchYT;