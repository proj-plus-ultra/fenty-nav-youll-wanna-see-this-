const axios = require('axios');
const KEY = process.env.KEY || require('./config.js').YOUTUBE_API_KEY;

const searchYT = (productName, callback) =>{
  let split = productName.split(' ');
  let first = split[0];
  let paramsObj = {
    part: 'snippet',
    channelId: 'UC0HVR9T6oFS3veefhGCGEsw',
    key: KEY,
    q: first,
    maxResults: 3,
    type: 'video',
    videoEmbeddable: true
  };

  axios.get('https://www.googleapis.com/youtube/v3/search', {params: paramsObj})
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => console.error(err));
};

module.exports = searchYT;