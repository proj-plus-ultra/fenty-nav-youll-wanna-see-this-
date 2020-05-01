import React from 'react';
import Video from './Video.jsx'

const Videos = ({videos}) =>{
  return (
    <div className="youll-wanna-see-this">
      <h3 className='content-header'>YOU'LL WANNA SEE THIS</h3>
      {console.log('From component', videos)}
      <div className='flexbox'>
      {videos.map((video,i) => <Video key={i} video={video}/>)}
      </div>

    </div>
  );
};

export default Videos;