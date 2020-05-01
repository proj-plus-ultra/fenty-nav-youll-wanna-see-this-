import React from 'react';

const Video = ({video}) =>(

    <div className='entry'>

      <img src={video.snippet.thumbnails.medium.url}></img>
      <div className='subtitle'>
         {video.snippet.title}
      </div>

  </div>


);

export default Video;


//<iframe src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>