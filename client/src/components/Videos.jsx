import React from 'react';
import Video from './Video.jsx';

const Videos = ({videos}) =>{
  let style = {
    color: '#fff',
    padding: '80px 0 80px 0',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  let videoDisplayStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 50px'
  };

  return (
    <div className="youll-wanna-see-this" style={style}>
      <h3 className='content-header'>YOU'LL WANNA SEE THIS</h3>
      {console.log('From component', videos)}
      <div className='videos-container' style={videoDisplayStyle}>
        {videos.map((video, i) => <Video key={i} video={video}/>)}
      </div>
    </div>
  );
};

export default Videos;