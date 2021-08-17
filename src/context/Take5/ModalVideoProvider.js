import { createContext, useState, useRef } from 'react';
import PropTypes from 'prop-types';
export const ModalVideoContext = createContext();

const ModalVideoProvider = ({ children }) => {
  const videoRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const [chosenVideo, setChosenVideo] = useState({});

  const handleVideoToggle = () => {
    setChosenVideo((prev) => {
      const video = prev.name === 'rain' ? 'beach' : 'rain';

      return {
        name: video,
        path: require(`../../videos/Take5/${video}.mp4`).default,
      };
    });
  };

  const handleChooseVideo = (e) => {
    setChosenVideo({
      name: e.target.name,
      path: require(`../../videos/Take5/${e.target.name}.mp4`).default,
    });

    setShowModal(true);
  };

  return (
    <ModalVideoContext.Provider
      value={{
        handleVideoToggle,
        handleChooseVideo,
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

ModalVideoProvider.propTypes = {
  children: PropTypes.node,
};

export default ModalVideoProvider;
