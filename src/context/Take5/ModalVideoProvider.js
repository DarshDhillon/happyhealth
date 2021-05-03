import { createContext, useState, useRef } from 'react';
import BeachVideo from '../../videos/Take5/beach.mp4';
import RainVideo from '../../videos/Take5/rain.mp4';
export const ModalVideoContext = createContext();

const ModalVideoProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const [chosenVideo, setChosenVideo] = useState({});

  const videoRef = useRef();

  const handleVideoToggle = () => {
    setChosenVideo((prev) => {
      switch (prev.name) {
        case 'beach':
          return { ...prev, name: 'rain', path: RainVideo };
        case 'rain':
          return { ...prev, name: 'beach', path: BeachVideo };
        default:
          return prev;
      }
    });
  };

  const handleImageClick = (e) => {
    e.target.name === 'beach'
      ? setChosenVideo({ name: e.target.name, path: BeachVideo })
      : setChosenVideo({ name: e.target.name, path: RainVideo });

    setShowModal(true);
  };

  return (
    <ModalVideoContext.Provider
      value={{
        handleVideoToggle,
        handleImageClick,
        setShowModal,
        showModal,
        chosenVideo,
        videoRef,
      }}
    >
      {children}
    </ModalVideoContext.Provider>
  );
};

export default ModalVideoProvider;
