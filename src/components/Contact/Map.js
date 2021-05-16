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
        >
          {/* <Marker latitude='51.5549' longitude='-0.1084'>
          <p>happyhealth</p>
        </Marker> */}
        </ReactMapGL>
      </MapWrapper>
    </MapContainer>
  );
};

export default Map;

const MapContainer = styled.div`
  display: flex;
  margin: 1rem;

  /* justify-content: center; */
  /* align-items: center; */

  /* height: 800px; */
  /* margin: 0 auto; */
  /* border: 1px solid black; */
`;

const MapWrapper = styled.div`
  border: 1px solid grey;
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
