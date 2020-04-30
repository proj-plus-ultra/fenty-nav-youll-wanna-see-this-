import react from 'react';
import axios from 'axios';

const searchYT = ({key, productName}, callback) =>{
  let paramsObj = {
    part: 'snippet',
    channelId: 'UC0HVR9T6oFS3veefhGCGEsw',
    key: key,
    q: productName,
    maxResults: 5,
    type: 'video',
    videoEmbeddable: true
  };

  axios.get('https://www.googleapis.com/youtube/v3/search', {params: paramsObj})
    .then((res) => {
      console.log('Retrieved Videos Succesfully!', res);
      callback(res);
    })
    .catch((err) => console.error(err));
};


export default searchYT;