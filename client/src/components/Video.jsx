import React from 'react';
const buttonSource = 'https://www.fentybeauty.com/on/demandware.static/-/Sites-FENTY-Library/default/dwbba3103b/homepage/playbutton_mobile.svg';


const Video = ({video}) =>(

    <div className='entry' >
      <img src = {buttonSource} className='buttonPlay' ></img>
      <img src={video.snippet.thumbnails.medium.url} className='thumbnail'></img>
      <div className='subtitle'>
         {video.snippet.title}
      </div>

  </div>


);

export default Video;


//<iframe src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>