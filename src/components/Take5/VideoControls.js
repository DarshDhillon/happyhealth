import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ModalVideoContext } from '../../context/Take5/ModalVideoProvider';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { BiCloudLightRain } from 'react-icons/bi';
import { GoUnmute } from 'react-icons/go';
import { GoMute } from 'react-icons/go';
import { BiPlayCircle } from 'react-icons/bi';
import { BiPauseCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const VideoControls = () => {
  const { handleVideoToggle, videoRef, chosenVideo } =
    useContext(ModalVideoContext);

  const [isVolume, setIsVolume] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const handleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;

    setIsVolume((prev) => !prev);
  };

  const handlePlayPause = () => {
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();

    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showControls && setShowControls((prev) => !prev);
    }, 9000);

    return () => clearTimeout(timer);
  }, [showControls]);

  return (
    <>
      <ControlButton onClick={() => setShowControls((prev) => !prev)} />
      <ControlsContainer showControls={showControls}>
        <VolumeWrapper onClick={handleMute}>
          {isVolume ? <MuteImage /> : <UnMuteImage />}
        </VolumeWrapper>
        <PlayPauseWrapper onClick={handlePlayPause}>
          {isPlaying ? <PauseImage /> : <PlayImage />}
        </PlayPauseWrapper>
        <VideoToggleWrapper onClick={handleVideoToggle}>
          {chosenVideo.name === 'rain' ? (
            <BeachIcon name='rain' />
          ) : (
            <RainIcon name='beach' />
          )}
        </VideoToggleWrapper>
      </ControlsContainer>
    </>
  );
};

export default VideoControls;

const ControlsContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  width: 40%;
  /* border: 1px solid red; */
  transform: ${({ showControls }) =>
    showControls ? 'translateY(0)' : 'translateY(100%)'};
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    width: 70%;
  }

  @media (orientation: landscape) {
    height: 200px;
    flex-direction: column;
    align-items: flex-start;
    width: 10%;
    transform: ${({ showControls }) =>
      showControls ? 'translateX(0)' : 'translateX(-100%)'};
    transition: all 0.3s ease-in-out;
  }
`;

const ControlButton = styled(FiSettings)`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 40px;
  width: 40px;
  color: lightgrey;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

const VolumeWrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
`;

const PlayPauseWrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
`;

const VideoToggleWrapper = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
`;

const BeachIcon = styled(FaUmbrellaBeach)`
  width: 60px;
  height: 60px;
  color: var(--mainPurple);
`;

const RainIcon = styled(BiCloudLightRain)`
  width: 60px;
  height: 60px;
  color: var(--mainPurple);
`;

const MuteImage = styled(GoMute)`
  width: 60px;
  height: 60px;
  color: var(--mainBlue);
`;

const UnMuteImage = styled(GoUnmute)`
  width: 60px;
  height: 60px;
  color: var(--mainBlue);
`;

const PlayImage = styled(BiPlayCircle)`
  width: 60px;
  height: 60px;
  color: var(--mainBlue);
`;

const PauseImage = styled(BiPauseCircle)`
  width: 60px;
  height: 60px;
  color: var(--mainBlue);
`;
