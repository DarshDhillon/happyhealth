import { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import BeachVideo from '../../videos/beach.mp4';
import RainVideo from '../../videos/rain.mp4';
import { ModalVideoContext } from '../../context/Take5/ModalVideoProvider';

const VideoPlayer = () => {
  const videoRef = useRef();
  const { chosenVideo } = useContext(ModalVideoContext);

  let selectedVideo = chosenVideo === 'beach' ? BeachVideo : RainVideo;

  useEffect(() => {
    videoRef.current.volume = 0.2;
  }, []);

  return (
    <VideoWrapper>
      <Video ref={videoRef} src={selectedVideo} autoPlay controls loop />
    </VideoWrapper>
  );
};

export default VideoPlayer;

const VideoWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 70%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Video = styled.video`
  border-radius: 2rem;
  height: auto;
  width: 100%;
`;
