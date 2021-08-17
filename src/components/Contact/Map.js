import styled from 'styled-components';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 51.5549,
    longitude: -0.1084,
    zoom: 14,
  });

  return (
    <MapContainer>
      <MapWrapper>
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
          {...viewport}
          width='100%'
          height='100%'
          onViewportChange={(viewport) => setViewport(viewport)}
          mapStyle='mapbox://styles/mapbox/streets-v11'
        ></ReactMapGL>
      </MapWrapper>
    </MapContainer>
  );
};

export default Map;

const MapContainer = styled.div`
  display: flex;
  margin: 1rem;
`;

const MapWrapper = styled.div`
  height: 400px;
  width: 600px;
  border-radius: 0.2rem;

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;
