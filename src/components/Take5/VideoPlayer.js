import { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ModalVideoContext } from '../../context/Take5/ModalVideoProvider';

const VideoPlayer = () => {
  const { chosenVideo, videoRef } = useContext(ModalVideoContext);

  useEffect(() => {
    videoRef.current.volume = 0.1;
  }, []);

  return (
    <VideoWrapper>
      <Video ref={videoRef} src={chosenVideo.path} autoPlay loop />
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
  border-radius: 1rem;
  height: auto;
  width: 100%;
`;
