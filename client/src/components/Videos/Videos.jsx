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

  let contentHeadStyle = {
    textAlign: 'center',
    color: '#fff',
    letterSpacing: '3px',
    lineHeight: '20px',
    margin: '0 auto',
    fontWeight: '400',
    fontFamily: 'brown-regular, Questrial, Times, Arial, sans-serif',
    padding: '0 0 48px 0',
    maxWidth: '420px',
    fontSize: '26px'
  };

  return (
    <div className="youll-wanna-see-this" style={style}>
      <h3 className='content-header' style={contentHeadStyle}>YOU'LL WANNA SEE THIS</h3>
      <div className='videos-container' style={videoDisplayStyle}>
        {videos.map((video, i) => <Video key={i} video={video}/>)}
      </div>
    </div>
  );
};

export default Videos;