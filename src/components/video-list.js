import React from 'react';
import VideoListItem from './video-list-item';

// props is an argument in a functional component
// in a class method, it is available everywhere as this.props
const VideoList = (props) => {
  const { videos, onVideoSelect } = props;
  const videoItems = videos.map((video) => {
    return <VideoListItem 
       onVideoSelect={onVideoSelect}
      key={video.etag} 
    video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
