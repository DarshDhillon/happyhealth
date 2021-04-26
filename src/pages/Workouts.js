import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Beach from '../videos/beach.mp4';

const Workouts = () => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.volume = 0.5;
  }, []);

  return (
    <Main>
      <Container>
        <Video ref={videoRef} src={Beach} autoPlay controls loop />
      </Container>
    </Main>
  );
};

export default Workouts;

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e8f2f7;
  z-index: 999;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 80%;
  width: 80%;
`;

const Video = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
