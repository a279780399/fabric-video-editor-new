import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const StyledVideoPlayer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const VideoPlayer = ({ videoUrls }:any) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
    setIsPlaying(true);
  };

  const handleVideoClick = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleVideoEnd = () => {
    playNextVideo();
  };

  return (
    <StyledVideoPlayer onClick={handleVideoClick}>
      <ReactPlayer
        url={videoUrls[currentVideoIndex]}
        playing={isPlaying}
        loop={false}
        muted={false}
        width="100%"
        height="100%"
        onEnded={handleVideoEnd}
      />
    </StyledVideoPlayer>
  );
};

export default VideoPlayer;
