import { useContext, useState } from 'react';
import styled from 'styled-components';
import { ModalVideoContext } from '../../context/Take5/ModalVideoProvider';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { BiCloudLightRain } from 'react-icons/bi';
import { GoUnmute } from 'react-icons/go';
import { GoMute } from 'react-icons/go';
import { BiPlayCircle } from 'react-icons/bi';
import { BiPauseCircle } from 'react-icons/bi';

const VideoControls = () => {
  const { handleVideoToggle, videoRef, chosenVideo } = useContext(
    ModalVideoContext
  );

  const [isVolume, setIsVolume] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleMute = () => {
    videoRef.current.muted
      ? (videoRef.current.muted = false)
      : (videoRef.current.muted = true);

    setIsVolume((prev) => !prev);
  };

  const handlePlayPause = () => {
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();

    setIsPlaying((prev) => !prev);
  };

  return (
    <ControlsContainer>
      <VolumeWrapper onClick={handleMute}>
        {isVolume ? <MuteImage /> : <UnMuteImage />}
      </VolumeWrapper>
      <PlayPauseWrapper onClick={handlePlayPause}>
        {isPlaying ? <PauseImage /> : <PlayImage />}
      </PlayPauseWrapper>
      <ImageWrapper onClick={handleVideoToggle}>
        {chosenVideo.name === 'rain' ? <BeachIcon /> : <RainIcon />}
      </ImageWrapper>
    </ControlsContainer>
  );
};

export default VideoControls;

const ControlsContainer = styled.div`
  border: 1px solid red;
  width: 200px;
`;

const VolumeWrapper = styled.div`
  border: 1px solid blue;
  width: 200px;
`;

const PlayPauseWrapper = styled.div`
  border: 1px solid black;
  width: 200px;
`;

const ImageWrapper = styled.div`
  padding: 1rem;
  border: 1px solid green;
`;

const BeachIcon = styled(FaUmbrellaBeach)`
  width: 100px;
  height: 100px;
  color: #fff;
`;

const RainIcon = styled(BiCloudLightRain)`
  width: 100px;
  height: 100px;
  color: #fff;
`;

const MuteImage = styled(GoMute)`
  width: 100px;
  height: 100px;
  color: #fff;
`;

const UnMuteImage = styled(GoUnmute)`
  width: 100px;
  height: 100px;
  color: #fff;
`;

const PlayImage = styled(BiPlayCircle)`
  width: 100px;
  height: 100px;
  color: #fff;
`;

const PauseImage = styled(BiPauseCircle)`
  width: 100px;
  height: 100px;
  color: #fff;
`;
