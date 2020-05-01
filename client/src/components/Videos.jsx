import React from 'react';

const Videos = ({videos}) =>{
  return (
    <div className="youll-wanna-see-this">
      <h3 className='content-header'>YOU'LL WANNA SEE THIS</h3>
      {console.log('From component', videos)}
      {videos.map((video, i) =>{
        return(
        <h3 key={i}>{video.snippet.title}</h3>
        )
      })}
    </div>
  );
};

export default Videos;